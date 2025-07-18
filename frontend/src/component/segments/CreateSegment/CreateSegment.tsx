import type React from 'react';
import { useContext } from 'react';
import { CreateButton } from 'component/common/CreateButton/CreateButton';
import FormTemplate from 'component/common/FormTemplate/FormTemplate';
import {
    CREATE_SEGMENT,
    UPDATE_PROJECT_SEGMENT,
} from 'component/providers/AccessProvider/permissions';
import { useSegmentsApi } from 'hooks/api/actions/useSegmentsApi/useSegmentsApi';
import { useConstraintsValidation } from 'hooks/api/getters/useConstraintsValidation/useConstraintsValidation';
import { useSegments } from 'hooks/api/getters/useSegments/useSegments';
import useUiConfig from 'hooks/api/getters/useUiConfig/useUiConfig';
import useToast from 'hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { formatUnknownError } from 'utils/formatUnknownError';
import { useSegmentForm } from '../hooks/useSegmentForm.ts';
import { SegmentForm } from '../SegmentForm.tsx';
import { feedbackCESContext } from 'component/feedback/FeedbackCESContext/FeedbackCESContext';
import { segmentsDocsLink } from 'component/segments/SegmentDocs';
import { useSegmentValuesCount } from 'component/segments/hooks/useSegmentValuesCount';
import { SEGMENT_CREATE_BTN_ID } from 'utils/testIds';
import { useSegmentLimits } from 'hooks/api/getters/useSegmentLimits/useSegmentLimits';
import { useOptionalPathParam } from 'hooks/useOptionalPathParam';
import { apiPayloadConstraintReplacer } from 'utils/api-payload-constraint-replacer.ts';

interface ICreateSegmentProps {
    modal?: boolean;
}

export const CreateSegment = ({ modal }: ICreateSegmentProps) => {
    const projectId = useOptionalPathParam('projectId');
    const { uiConfig } = useUiConfig();
    const { setToastData, setToastApiError } = useToast();
    const { showFeedbackCES } = useContext(feedbackCESContext);
    const navigate = useNavigate();
    const { createSegment, loading } = useSegmentsApi();
    const { refetchSegments } = useSegments();

    const {
        name,
        setName,
        description,
        setDescription,
        project,
        setProject,
        constraints,
        setConstraints,
        getSegmentPayload,
        errors,
        clearErrors,
    } = useSegmentForm('', '', projectId);

    const hasValidConstraints = useConstraintsValidation(constraints);
    const { segmentValuesLimit } = useSegmentLimits();
    const segmentValuesCount = useSegmentValuesCount(constraints);

    const overSegmentValuesLimit: boolean = Boolean(
        segmentValuesLimit && segmentValuesCount > segmentValuesLimit,
    );

    const formatApiCode = () => {
        return `curl --location --request POST '${uiConfig.unleashUrl}/api/admin/segments' \\
--header 'Authorization: INSERT_API_KEY' \\
--header 'Content-Type: application/json' \\
--data-raw '${JSON.stringify(getSegmentPayload(), apiPayloadConstraintReplacer, 2)}'`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        clearErrors();
        try {
            await createSegment(getSegmentPayload());
            await refetchSegments();
            if (projectId) {
                navigate(`/projects/${projectId}/settings/segments/`);
            } else {
                navigate('/segments/');
            }
            setToastData({
                text: 'Segment created',
                type: 'success',
            });
            showFeedbackCES({
                title: 'How easy was it to create a segment?',
                text: 'Please help us understand how we can improve segments',
                path: '/segments/create',
            });
        } catch (error: unknown) {
            setToastApiError(formatUnknownError(error));
        }
    };

    return (
        <FormTemplate
            loading={loading}
            modal={modal}
            title='Create segment'
            description={segmentsFormDescription}
            documentationLink={segmentsDocsLink}
            documentationLinkLabel='Segments documentation'
            formatApiCode={formatApiCode}
        >
            <SegmentForm
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription}
                project={project}
                setProject={setProject}
                constraints={constraints}
                setConstraints={setConstraints}
                errors={errors}
                clearErrors={clearErrors}
                mode='create'
            >
                <CreateButton
                    name='segment'
                    permission={[CREATE_SEGMENT, UPDATE_PROJECT_SEGMENT]}
                    projectId={projectId}
                    disabled={!hasValidConstraints || overSegmentValuesLimit}
                    data-testid={SEGMENT_CREATE_BTN_ID}
                />
            </SegmentForm>
        </FormTemplate>
    );
};

export const segmentsFormDescription = `
    Segments make it easy for you to define which of your users should get access to a feature.
    A segment is a reusable collection of constraints.
    You can create and apply a segment when configuring activation strategies for a feature flag or at any time from the segments page in the navigation menu.
`;
