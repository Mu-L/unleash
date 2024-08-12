import {
    PROJECT_SETTINGS_WRITE,
    UPDATE_PROJECT,
} from 'component/providers/AccessProvider/permissions';
import useUiConfig from 'hooks/api/getters/useUiConfig/useUiConfig';
import { useRequiredPathParam } from 'hooks/useRequiredPathParam';
import { useContext } from 'react';
import AccessContext from 'contexts/AccessContext';
import { Alert, styled } from '@mui/material';
import { UpdateEnterpriseSettings } from './UpdateEnterpriseSettings';
import { UpdateProject } from './UpdateProject';
import { DeleteProjectForm } from './DeleteProjectForm';
import useProjectOverview, {
    featuresCount,
} from 'hooks/api/getters/useProjectOverview/useProjectOverview';
import { ArchiveProjectForm } from './ArchiveProjectForm';
import { useUiFlag } from 'hooks/useUiFlag';

const StyledFormContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
}));

const EditProject = () => {
    const { isEnterprise } = useUiConfig();
    const { hasAccess } = useContext(AccessContext);
    const id = useRequiredPathParam('projectId');
    const { project } = useProjectOverview(id);
    const archiveProjectsEnabled = useUiFlag('archiveProjects');

    if (!project.name) {
        return null;
    }

    const accessDeniedAlert = !hasAccess(
        [UPDATE_PROJECT, PROJECT_SETTINGS_WRITE],
        id,
    ) && (
        <Alert severity='error' sx={{ mb: 4 }}>
            You do not have the required permissions to edit this project.
        </Alert>
    );

    return (
        <>
            {accessDeniedAlert}
            <StyledFormContainer>
                <UpdateProject project={project} />
                {isEnterprise() ? (
                    <UpdateEnterpriseSettings project={project} />
                ) : null}
                {archiveProjectsEnabled ? (
                    <ArchiveProjectForm featureCount={featuresCount(project)} />
                ) : (
                    <DeleteProjectForm featureCount={featuresCount(project)} />
                )}
            </StyledFormContainer>
        </>
    );
};

export default EditProject;
