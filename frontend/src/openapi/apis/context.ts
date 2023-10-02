/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import useSwr from 'swr';
import type { SWRConfiguration, Key } from 'swr';
import type {
    ContextFieldsSchema,
    ContextFieldSchema,
    CreateContextFieldSchema,
    UpdateContextFieldSchema,
    NameSchema,
} from '../models';
import { fetcher } from '../fetcher';
import type { ErrorType, BodyType } from '../fetcher';

/**
 * Returns all configured [Context fields](https://docs.getunleash.io/how-to/how-to-define-custom-context-fields) that have been created.
 * @summary Gets configured context fields
 */
export const getContextFields = () => {
    return fetcher<ContextFieldsSchema>({
        url: `/api/admin/context`,
        method: 'get',
    });
};

export const getGetContextFieldsKey = () => [`/api/admin/context`] as const;

export type GetContextFieldsQueryResult = NonNullable<
    Awaited<ReturnType<typeof getContextFields>>
>;
export type GetContextFieldsQueryError = ErrorType<unknown>;

/**
 * @summary Gets configured context fields
 */
export const useGetContextFields = <TError = ErrorType<unknown>>(options?: {
    swr?: SWRConfiguration<
        Awaited<ReturnType<typeof getContextFields>>,
        TError
    > & { swrKey?: Key; enabled?: boolean };
}) => {
    const { swr: swrOptions } = options ?? {};

    const isEnabled = swrOptions?.enabled !== false;
    const swrKey =
        swrOptions?.swrKey ??
        (() => (isEnabled ? getGetContextFieldsKey() : null));
    const swrFn = () => getContextFields();

    const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
        swrKey,
        swrFn,
        swrOptions
    );

    return {
        swrKey,
        ...query,
    };
};

/**
 * Endpoint that allows creation of [custom context fields](https://docs.getunleash.io/reference/unleash-context#custom-context-fields)
 * @summary Create a context field
 */
export const createContextField = (
    createContextFieldSchema: BodyType<CreateContextFieldSchema>
) => {
    return fetcher<ContextFieldSchema>({
        url: `/api/admin/context`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: createContextFieldSchema,
    });
};

/**
 * Returns specific [context field](https://docs.getunleash.io/reference/unleash-context) identified by the name in the path
 * @summary Gets context field
 */
export const getContextField = (contextField: string) => {
    return fetcher<ContextFieldSchema>({
        url: `/api/admin/context/${contextField}`,
        method: 'get',
    });
};

export const getGetContextFieldKey = (contextField: string) =>
    [`/api/admin/context/${contextField}`] as const;

export type GetContextFieldQueryResult = NonNullable<
    Awaited<ReturnType<typeof getContextField>>
>;
export type GetContextFieldQueryError = ErrorType<unknown>;

/**
 * @summary Gets context field
 */
export const useGetContextField = <TError = ErrorType<unknown>>(
    contextField: string,
    options?: {
        swr?: SWRConfiguration<
            Awaited<ReturnType<typeof getContextField>>,
            TError
        > & { swrKey?: Key; enabled?: boolean };
    }
) => {
    const { swr: swrOptions } = options ?? {};

    const isEnabled = swrOptions?.enabled !== false && !!contextField;
    const swrKey =
        swrOptions?.swrKey ??
        (() => (isEnabled ? getGetContextFieldKey(contextField) : null));
    const swrFn = () => getContextField(contextField);

    const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
        swrKey,
        swrFn,
        swrOptions
    );

    return {
        swrKey,
        ...query,
    };
};

/**
 * Endpoint that allows updating a custom context field. Used to toggle stickiness and add/remove legal values for this context field
 * @summary Update an existing context field
 */
export const updateContextField = (
    contextField: string,
    updateContextFieldSchema: BodyType<UpdateContextFieldSchema>
) => {
    return fetcher<void>({
        url: `/api/admin/context/${contextField}`,
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        data: updateContextFieldSchema,
    });
};

/**
 * Endpoint that allows deletion of a custom context field. Does not validate that context field is not in use, but since context field configuration is stored in a json blob for the strategy, existing strategies are safe.
 * @summary Delete an existing context field
 */
export const deleteContextField = (contextField: string) => {
    return fetcher<void>({
        url: `/api/admin/context/${contextField}`,
        method: 'delete',
    });
};

/**
 * Check whether the provided data can be used to create a context field. If the data is not valid, ...?
 * @summary Validate a context field
 */
export const validate = (nameSchema: BodyType<NameSchema>) => {
    return fetcher<void>({
        url: `/api/admin/context/validate`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: nameSchema,
    });
};
