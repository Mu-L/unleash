import { formatApiPath } from 'utils/formatPath';
import handleErrorResponses from '../httpErrorResponseHandler.js';
import type { IChangeRequestEnvironmentConfig } from 'component/changeRequest/changeRequest.types';
import { useConditionalSWR } from '../useConditionalSWR/useConditionalSWR.js';
import useUiConfig from '../useUiConfig/useUiConfig.js';

export const useChangeRequestConfig = (projectId: string) => {
    const { isEnterprise } = useUiConfig();
    const { data, error, mutate } = useConditionalSWR<
        IChangeRequestEnvironmentConfig[]
    >(
        Boolean(projectId) && isEnterprise(),
        [],
        formatApiPath(`api/admin/projects/${projectId}/change-requests/config`),
        fetcher,
    );
    return {
        data: data || [],
        loading: !error && !data,
        refetchChangeRequestConfig: mutate,
        error,
    };
};

const fetcher = (path: string) => {
    return fetch(path)
        .then(handleErrorResponses('Request changes'))
        .then((res) => res.json());
};
