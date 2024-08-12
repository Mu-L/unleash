import { Alert, Link } from '@mui/material';
import type React from 'react';
import type { ReactNode } from 'react';
import useUiConfig from 'hooks/api/getters/useUiConfig/useUiConfig';
import { CancelButton, StyledBox, StyledForm } from './ApiTokenForm.styles';

interface IApiTokenFormProps {
    handleSubmit: (e: any) => void;
    handleCancel: () => void;
    mode: 'Create' | 'Edit';
    actions?: ReactNode;
    children?: React.ReactNode;
}

const ApiTokenForm: React.FC<IApiTokenFormProps> = ({
    children,
    actions,
    handleSubmit,
    handleCancel,
}) => {
    const { uiConfig } = useUiConfig();

    const isUnleashCloud = Boolean(uiConfig?.flags?.UNLEASH_CLOUD);

    return (
        <StyledForm onSubmit={handleSubmit}>
            {isUnleashCloud ? (
                <Alert severity='info' sx={{ mb: 4 }}>
                    Please be aware of our{' '}
                    <Link href='https://www.getunleash.io/fair-use-policy'>
                        fair use policy
                    </Link>
                    .
                </Alert>
            ) : null}
            {children}
            <StyledBox>
                {actions}
                <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            </StyledBox>
        </StyledForm>
    );
};

export default ApiTokenForm;
