import type React from 'react';
import { useMediaQuery } from '@mui/material';
import PermissionButton from 'component/common/PermissionButton/PermissionButton';
import PermissionIconButton from 'component/common/PermissionIconButton/PermissionIconButton';
import type { ITooltipResolverProps } from '../TooltipResolver/TooltipResolver';

interface IResponsiveButtonProps {
    Icon: React.ElementType;
    endIcon?: React.ReactNode;
    tooltipProps?: Omit<ITooltipResolverProps, 'children'>;
    onClick: () => void;
    disabled?: boolean;
    permission: string | string[];
    projectId?: string;
    environmentId?: string;
    maxWidth: string;
    className?: string;
    children?: React.ReactNode;
}

const ResponsiveButton: React.FC<IResponsiveButtonProps> = ({
    Icon,
    onClick,
    maxWidth,
    disabled = false,
    children,
    permission,
    environmentId,
    projectId,
    endIcon,
    ...rest
}) => {
    const smallScreen = useMediaQuery(`(max-width:${maxWidth})`);

    return smallScreen ? (
        <PermissionIconButton
            disabled={disabled}
            onClick={onClick}
            permission={permission}
            projectId={projectId}
            environmentId={environmentId}
            data-loading
            {...rest}
        >
            <Icon />
        </PermissionIconButton>
    ) : (
        <PermissionButton
            onClick={onClick}
            permission={permission}
            projectId={projectId}
            color='primary'
            variant='contained'
            disabled={disabled}
            environmentId={environmentId}
            endIcon={endIcon}
            data-loading
            {...rest}
        >
            {children}
        </PermissionButton>
    );
};

export default ResponsiveButton;
