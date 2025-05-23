import type { IStrategyPayload } from 'interfaces/strategy';
import { useCallback } from 'react';
import useAPI from '../useApi/useApi.js';

const URI = 'api/admin/strategies';

const useStrategiesApi = () => {
    const { makeRequest, createRequest, errors, loading } = useAPI({
        propagateErrors: true,
    });

    const createStrategy = useCallback(
        async (strategy: IStrategyPayload) => {
            const req = createRequest(URI, {
                method: 'POST',
                body: JSON.stringify(strategy),
            });

            return makeRequest(req.caller, req.id);
        },
        [createRequest, makeRequest],
    );

    const updateStrategy = useCallback(
        async (strategy: IStrategyPayload) => {
            const path = `${URI}/${strategy.name}`;
            const req = createRequest(path, {
                method: 'PUT',
                body: JSON.stringify(strategy),
            });

            return makeRequest(req.caller, req.id);
        },
        [createRequest, makeRequest],
    );

    const removeStrategy = useCallback(
        async (strategy: IStrategyPayload) => {
            const path = `${URI}/${strategy.name}`;
            const req = createRequest(path, { method: 'DELETE' });

            return makeRequest(req.caller, req.id);
        },
        [createRequest, makeRequest],
    );

    const deprecateStrategy = useCallback(
        async (strategy: IStrategyPayload) => {
            const path = `${URI}/${strategy.name}/deprecate`;
            const req = createRequest(path, {
                method: 'POST',
            });

            return makeRequest(req.caller, req.id);
        },
        [createRequest, makeRequest],
    );

    const reactivateStrategy = useCallback(
        async (strategy: IStrategyPayload) => {
            const path = `${URI}/${strategy.name}/reactivate`;
            const req = createRequest(path, { method: 'POST' });

            return makeRequest(req.caller, req.id);
        },
        [createRequest, makeRequest],
    );

    return {
        createStrategy,
        updateStrategy,
        removeStrategy,
        deprecateStrategy,
        reactivateStrategy,
        errors,
        loading,
    };
};

export default useStrategiesApi;
