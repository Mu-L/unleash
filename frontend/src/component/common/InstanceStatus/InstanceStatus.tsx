import { useInstanceStatus } from 'hooks/api/getters/useInstanceStatus/useInstanceStatus';
import React, {
    type FC,
    type VFC,
    useEffect,
    useState,
    useContext,
} from 'react';
import { InstanceStatusBar } from 'component/common/InstanceStatus/InstanceStatusBar';
import { ConditionallyRender } from 'component/common/ConditionallyRender/ConditionallyRender';
import { Dialogue } from 'component/common/Dialogue/Dialogue';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { type IInstanceStatus, InstancePlan } from 'interfaces/instance';
import { ADMIN } from '@server/types/permissions';
import AccessContext from 'contexts/AccessContext';
import useInstanceStatusApi from 'hooks/api/actions/useInstanceStatusApi/useInstanceStatusApi';
import { trialHasExpired, canExtendTrial } from 'utils/instanceTrial';
import useToast from 'hooks/useToast';
import { formatUnknownError } from 'utils/formatUnknownError';

interface ITrialDialogProps {
    instanceStatus: IInstanceStatus;
    onExtendTrial: () => Promise<void>;
}

const TrialDialog: VFC<ITrialDialogProps> = ({
    instanceStatus,
    onExtendTrial,
}) => {
    const { hasAccess } = useContext(AccessContext);
    const navigate = useNavigate();
    const expired = trialHasExpired(instanceStatus);
    const [dialogOpen, setDialogOpen] = useState(expired);

    const onClose = (event: React.SyntheticEvent, muiCloseReason?: string) => {
        if (!muiCloseReason) {
            setDialogOpen(false);
            if (canExtendTrial(instanceStatus)) {
                onExtendTrial().catch(console.error);
            }
        }
    };

    useEffect(() => {
        setDialogOpen(expired);
        const interval = setInterval(() => {
            setDialogOpen(expired);
        }, 60000);
        return () => clearInterval(interval);
    }, [expired]);

    if (instanceStatus.plan === InstancePlan.ENTERPRISE) {
        return (
            <Dialogue
                open={dialogOpen}
                secondaryButtonText='Remind me later'
                onClose={() => {
                    setDialogOpen(false);
                }}
                title={`Your free ${instanceStatus.plan} trial has expired!`}
            >
                <Typography>
                    Please contact your Unleash sales representative to avoid{' '}
                    <strong>deletion of your Unleash account.</strong>
                </Typography>
            </Dialogue>
        );
    }

    if (hasAccess(ADMIN)) {
        return (
            <Dialogue
                open={dialogOpen}
                primaryButtonText='Upgrade trial'
                secondaryButtonText={
                    canExtendTrial(instanceStatus)
                        ? 'Extend trial (5 days)'
                        : 'Remind me later'
                }
                onClick={() => {
                    navigate('/admin/billing');
                    setDialogOpen(false);
                }}
                onClose={onClose}
                title={`Your free ${instanceStatus.plan} trial has expired!`}
            >
                <Typography>
                    <strong>Upgrade trial</strong> otherwise your{' '}
                    <strong>account will be deleted.</strong>
                </Typography>
            </Dialogue>
        );
    }

    return (
        <Dialogue
            open={dialogOpen}
            secondaryButtonText='Remind me later'
            onClose={() => {
                setDialogOpen(false);
            }}
            title={`Your free ${instanceStatus.plan} trial has expired!`}
        >
            <Typography>
                Please inform your admin to <strong>Upgrade trial</strong> or
                your <strong>account will be deleted.</strong>
            </Typography>
        </Dialogue>
    );
};

export const InstanceStatus: FC<{ children?: React.ReactNode }> = ({
    children,
}) => {
    const { instanceStatus, refetchInstanceStatus } = useInstanceStatus();
    const { extendTrial } = useInstanceStatusApi();
    const { setToastApiError } = useToast();

    const onExtendTrial = async () => {
        try {
            await extendTrial();
            await refetchInstanceStatus();
        } catch (error: unknown) {
            setToastApiError(formatUnknownError(error));
        }
    };

    return (
        <>
            <ConditionallyRender
                condition={Boolean(instanceStatus)}
                show={() => (
                    <>
                        <InstanceStatusBarMemo
                            instanceStatus={instanceStatus!}
                        />
                        <TrialDialog
                            instanceStatus={instanceStatus!}
                            onExtendTrial={onExtendTrial}
                        />
                    </>
                )}
            />
            {children}
        </>
    );
};

const InstanceStatusBarMemo = React.memo(InstanceStatusBar);
