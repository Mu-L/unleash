import { Box, IconButton, styled, Tooltip } from '@mui/material';
import type { NavigationMode } from './NavigationMode';
import type { FC } from 'react';
import HideIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ExpandIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SettingsIcon from '@mui/icons-material/Settings';

const ShowHideRow = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'mode',
})<{ mode: NavigationMode }>(({ theme, mode }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2, 1, 0, mode === 'mini' ? 1.5 : 2),
    cursor: 'pointer',
    position: 'sticky',
    bottom: theme.spacing(2),
    width: '100%',
}));

// This component is needed when the sticky item could overlap with nav items. You can replicate it on a short screen.
const ShowHideContainer = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    display: 'flex',
    alignItems: 'end',
}));

export const ShowHide: FC<{ mode: NavigationMode; onChange: () => void }> = ({
    mode,
    onChange,
}) => {
    return (
        <ShowHideContainer>
            <ShowHideRow onClick={onChange} mode={mode}>
                {mode === 'full' && (
                    <Box
                        sx={(theme) => ({
                            color: theme.palette.neutral.main,
                            fontSize: 'small',
                        })}
                    >
                        Hide (⌘ + B)
                    </Box>
                )}
                <IconButton>
                    {mode === 'full' ? (
                        <HideIcon color='primary' />
                    ) : (
                        <Tooltip title='Expand (⌘ + B)' placement='right'>
                            <ExpandIcon
                                data-testid='expand-navigation'
                                color='primary'
                            />
                        </Tooltip>
                    )}
                </IconButton>
            </ShowHideRow>
        </ShowHideContainer>
    );
};

const ShowAdminWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2, 1, 0, 1.5),
}));

export const ShowAdmin: FC<{ onChange: () => void }> = ({ onChange }) => {
    return (
        <ShowAdminWrapper onClick={onChange}>
            <IconButton>
                <Tooltip title='Expand admin settings' placement='right'>
                    <SettingsIcon data-testid='expand-admin-settings' />
                </Tooltip>
            </IconButton>
        </ShowAdminWrapper>
    );
};
