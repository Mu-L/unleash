import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Typography } from '@mui/material';
import { CREATED, OK } from 'constants/statusCodes';
import useToast from 'hooks/useToast';
import useResetPassword from 'hooks/api/getters/useResetPassword/useResetPassword';
import { ConditionallyRender } from 'component/common/ConditionallyRender/ConditionallyRender';
import { useUserInvite } from 'hooks/api/getters/useUserInvite/useUserInvite';
import { useInviteTokenApi } from 'hooks/api/actions/useInviteTokenApi/useInviteTokenApi';
import { formatUnknownError } from 'utils/formatUnknownError';
import { useAuthResetPasswordApi } from 'hooks/api/actions/useAuthResetPasswordApi/useAuthResetPasswordApi';
import AuthOptions from '../common/AuthOptions/AuthOptions.tsx';
import DividerText from 'component/common/DividerText/DividerText';
import { useAuthDetails } from 'hooks/api/getters/useAuth/useAuthDetails';
import ResetPasswordForm from '../common/ResetPasswordForm/ResetPasswordForm.tsx';
import InvalidToken from '../common/InvalidToken/InvalidToken.tsx';
import { NewUserWrapper } from './NewUserWrapper/NewUserWrapper.tsx';
import ResetPasswordError from '../common/ResetPasswordError/ResetPasswordError.tsx';

export const NewUser = () => {
    const { authDetails } = useAuthDetails();
    const { setToastApiError } = useToast();
    const navigate = useNavigate();
    const [apiError, setApiError] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const {
        token,
        data: passwordResetData,
        loading: resetLoading,
        isValidToken,
    } = useResetPassword();
    const {
        secret,
        loading: inviteLoading,
        isValid: isValidInvite,
    } = useUserInvite();
    const { addUser, loading: isUserSubmitting } = useInviteTokenApi();
    const { resetPassword, loading: isPasswordSubmitting } =
        useAuthResetPasswordApi();
    const passwordDisabled = authDetails?.defaultHidden === true;

    const onSubmitInvitedUser = async (password: string) => {
        try {
            const res = await addUser(secret, { name, email, password });
            if (res.status === CREATED) {
                navigate('/login?invited=true');
            } else {
                setToastApiError(
                    "Couldn't create user. Check if your invite link is valid.",
                );
            }
        } catch (error) {
            setToastApiError(formatUnknownError(error));
        }
    };

    const onSubmitPasswordReset = async (password: string) => {
        try {
            const res = await resetPassword({ token, password });
            if (res.status === OK) {
                navigate('/login?reset=true');
            } else {
                setApiError(
                    'Something went wrong when attempting to update your password. This could be due to unstable internet connectivity. If retrying the request does not work, please try again later.',
                );
            }
        } catch (e) {
            const error = formatUnknownError(e);
            setApiError(error);
        }
    };

    const onSubmit = (password: string) => {
        if (isValidInvite) {
            onSubmitInvitedUser(password);
        } else {
            onSubmitPasswordReset(password);
        }
    };

    if (!isValidToken && !isValidInvite) {
        return (
            <NewUserWrapper loading={resetLoading || inviteLoading}>
                <InvalidToken />
            </NewUserWrapper>
        );
    }

    return (
        <NewUserWrapper
            loading={
                resetLoading ||
                inviteLoading ||
                isUserSubmitting ||
                isPasswordSubmitting
            }
            title={
                passwordDisabled
                    ? 'Connect your account and start your journey'
                    : 'Enter your personal details and start your journey'
            }
        >
            <ConditionallyRender
                condition={passwordResetData?.createdBy}
                show={
                    <Typography
                        variant='body1'
                        data-loading
                        sx={{ textAlign: 'center', mb: 2 }}
                    >
                        {passwordResetData?.createdBy}
                        <br /> has invited you to join Unleash.
                    </Typography>
                }
            />
            <Typography color='text.secondary'>
                We suggest using{' '}
                <Typography component='strong' fontWeight='bold'>
                    the email you use for work
                </Typography>
                .
            </Typography>
            <ConditionallyRender
                condition={Boolean(authDetails?.options?.length)}
                show={
                    <Box sx={{ mt: 2 }}>
                        <AuthOptions options={authDetails?.options} />
                    </Box>
                }
            />
            <ConditionallyRender
                condition={
                    Boolean(authDetails?.options?.length) && !passwordDisabled
                }
                show={
                    <DividerText
                        text='or sign-up with an email address'
                        data-loading
                    />
                }
            />
            <ConditionallyRender
                condition={!passwordDisabled}
                show={
                    <>
                        <ConditionallyRender
                            condition={passwordResetData?.email}
                            show={() => (
                                <Typography
                                    data-loading
                                    variant='body1'
                                    sx={{ my: 1 }}
                                >
                                    Your username is
                                </Typography>
                            )}
                        />
                        <TextField
                            data-loading
                            type='email'
                            value={
                                isValidToken
                                    ? passwordResetData?.email || ''
                                    : email
                            }
                            id='email'
                            label='Email'
                            variant='outlined'
                            size='small'
                            sx={{ my: 1 }}
                            disabled={isValidToken}
                            fullWidth
                            required
                            onChange={(e) => {
                                if (isValidToken) {
                                    return;
                                }
                                setEmail(e.target.value);
                            }}
                        />
                        <ConditionallyRender
                            condition={Boolean(isValidInvite)}
                            show={() => (
                                <TextField
                                    data-loading
                                    value={name}
                                    id='username'
                                    label='Full name'
                                    variant='outlined'
                                    size='small'
                                    sx={{ my: 1 }}
                                    fullWidth
                                    required
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            )}
                        />
                        <Typography variant='body1' data-loading sx={{ mt: 2 }}>
                            Set a password for your account.
                        </Typography>
                        <ConditionallyRender
                            condition={isValidToken}
                            show={
                                <ResetPasswordError>
                                    {apiError}
                                </ResetPasswordError>
                            }
                        />
                        <ResetPasswordForm onSubmit={onSubmit} />
                    </>
                }
            />
        </NewUserWrapper>
    );
};
