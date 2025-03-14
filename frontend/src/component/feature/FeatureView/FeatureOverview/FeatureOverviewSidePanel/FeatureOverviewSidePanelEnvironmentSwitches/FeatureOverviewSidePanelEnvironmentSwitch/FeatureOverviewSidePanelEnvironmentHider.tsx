import type { IFeatureEnvironment } from 'interfaces/featureToggle';
import { IconButton, styled } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ConditionallyRender } from 'component/common/ConditionallyRender/ConditionallyRender';

const StyledVisibilityToggle = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== 'visibilityOff',
})<{ visibilityOff: boolean }>(({ theme, visibilityOff }) => ({
    marginLeft: 'auto',
    marginRight: theme.spacing(-1),
    color: visibilityOff
        ? theme.palette.action.active
        : theme.palette.action.focus,
    '&:hover': {
        color: theme.palette.action.active,
    },
}));

interface IFeatureOverviewSidePanelEnvironmentHiderProps {
    environment: IFeatureEnvironment;
    hiddenEnvironments: Set<String>;
    setHiddenEnvironments: (environment: string) => void;
}

export const FeatureOverviewSidePanelEnvironmentHider = ({
    environment,
    hiddenEnvironments,
    setHiddenEnvironments,
}: IFeatureOverviewSidePanelEnvironmentHiderProps) => {
    const toggleHiddenEnvironments = () => {
        setHiddenEnvironments(environment.name);
    };

    const isHidden = hiddenEnvironments.has(environment.name);

    return (
        <StyledVisibilityToggle
            onClick={toggleHiddenEnvironments}
            visibilityOff={isHidden}
            aria-label={`${isHidden ? 'Show' : 'Hide'} environment "${environment.name}"`}
        >
            <ConditionallyRender
                condition={isHidden}
                show={<VisibilityOff />}
                elseShow={<Visibility />}
            />
        </StyledVisibilityToggle>
    );
};
