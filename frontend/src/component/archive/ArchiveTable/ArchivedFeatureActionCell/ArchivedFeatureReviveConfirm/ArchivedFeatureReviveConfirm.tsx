import { Alert, styled } from '@mui/material';
import type React from 'react';
import { Dialogue } from 'component/common/Dialogue/Dialogue';
import { formatUnknownError } from 'utils/formatUnknownError';
import useToast from 'hooks/useToast';
import useProjectApi from 'hooks/api/actions/useProjectApi/useProjectApi';

interface IArchivedFeatureReviveConfirmProps {
    revivedFeatures: string[];
    projectId: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    refetch: () => void;
}

const StyledParagraph = styled('p')(({ theme }) => ({
    marginTop: theme.spacing(2),
}));

export const ArchivedFeatureReviveConfirm = ({
    revivedFeatures,
    projectId,
    open,
    setOpen,
    refetch,
}: IArchivedFeatureReviveConfirmProps) => {
    const { setToastData, setToastApiError } = useToast();
    const { reviveFeatures } = useProjectApi();

    const onReviveFeatureToggle = async () => {
        try {
            if (revivedFeatures.length === 0) {
                return;
            }
            await reviveFeatures(projectId, revivedFeatures);

            await refetch();
            setToastData({
                type: 'success',
                title: "And we're back!",
                text: 'The feature flags have been revived.',
            });
        } catch (error: unknown) {
            setToastApiError(formatUnknownError(error));
        } finally {
            clearModal();
        }
    };

    const clearModal = () => {
        setOpen(false);
    };

    const title = `Revive feature flag${
        revivedFeatures.length > 1 ? 's' : ''
    }?`;
    const primaryBtnText = `Revive feature flag${
        revivedFeatures.length > 1 ? 's' : ''
    }`;

    return (
        <Dialogue
            title={title}
            open={open}
            primaryButtonText={primaryBtnText}
            secondaryButtonText='Cancel'
            onClick={onReviveFeatureToggle}
            onClose={clearModal}
        >
            <Alert severity='info'>
                Revived feature flags will be automatically disabled in all
                environments
            </Alert>
            {revivedFeatures.length > 1 ? (
                <>
                    <StyledParagraph>
                        You are about to revive feature flags:
                    </StyledParagraph>
                    <ul>
                        {revivedFeatures.map((name) => (
                            <li key={`revive-${name}`}>{name}</li>
                        ))}
                    </ul>
                </>
            ) : (
                <StyledParagraph>
                    You are about to revive feature flag: {revivedFeatures[0]}
                </StyledParagraph>
            )}
        </Dialogue>
    );
};
