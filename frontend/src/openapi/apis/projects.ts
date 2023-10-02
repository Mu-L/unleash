/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import useSwr from 'swr';
import type { SWRConfiguration, Key } from 'swr';
import type {
    ProjectsSchema,
    GetProjects401,
    GetProjects403,
    ProjectCreatedSchema,
    CreateProjectSchema,
    ValidateProjectSchema,
    UpdateProjectSchema,
    ProjectOverviewSchema,
    GetProjectOverview401,
    GetProjectOverview403,
    GetProjectOverview404,
    UpdateProjectEnterpriseSettingsSchema,
    ProjectUsersSchema,
    GetProjectUsers401,
    GetProjectUsers403,
    ProjectAccessSchema,
    GetProjectAccess401,
    GetProjectAccess403,
    ProjectAddAccessSchema,
    ProjectRoleUsageSchema,
    GetRoleProjectAccess401,
    GetRoleProjectAccess403,
    ProjectAddRoleAccessSchema,
    ProjectDoraMetricsSchema,
    GetProjectDora401,
    GetProjectDora403,
    GetProjectDora404,
    ProjectEnvironmentSchema,
    CreateFeatureStrategySchema,
    HealthReportSchema,
    GetProjectHealthReport401,
    GetProjectHealthReport403,
    GetProjectHealthReport404,
    ApiTokensSchema,
    GetProjectApiTokens401,
    GetProjectApiTokens403,
    GetProjectApiTokens404,
    ApiTokenSchema,
    CreateApiTokenSchema,
} from '../models';
import { fetcher } from '../fetcher';
import type { ErrorType, BodyType } from '../fetcher';

/**
 * This endpoint returns an list of all the projects in the Unleash instance.
 * @summary Get a list of all projects.
 */
export const getProjects = () => {
    return fetcher<ProjectsSchema>({
        url: `/api/admin/projects`,
        method: 'get',
    });
};

export const getGetProjectsKey = () => [`/api/admin/projects`] as const;

export type GetProjectsQueryResult = NonNullable<
    Awaited<ReturnType<typeof getProjects>>
>;
export type GetProjectsQueryError = ErrorType<GetProjects401 | GetProjects403>;

/**
 * @summary Get a list of all projects.
 */
export const useGetProjects = <
    TError = ErrorType<GetProjects401 | GetProjects403>
>(options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof getProjects>>, TError> & {
        swrKey?: Key;
        enabled?: boolean;
    };
}) => {
    const { swr: swrOptions } = options ?? {};

    const isEnabled = swrOptions?.enabled !== false;
    const swrKey =
        swrOptions?.swrKey ?? (() => (isEnabled ? getGetProjectsKey() : null));
    const swrFn = () => getProjects();

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
 * Create a new [Unleash project](https://docs.getunleash.io/reference/projects).
 * @summary Create project
 */
export const createProject = (
    createProjectSchema: BodyType<CreateProjectSchema>
) => {
    return fetcher<ProjectCreatedSchema>({
        url: `/api/admin/projects`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: createProjectSchema,
    });
};

/**
 * Validate a project ID against Unleash's rules
 * @summary Validate project ID
 */
export const validateProject = (
    validateProjectSchema: BodyType<ValidateProjectSchema>
) => {
    return fetcher<void>({
        url: `/api/admin/projects/validate`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: validateProjectSchema,
    });
};

/**
 * Update a project with new configuration. Any fields not provided are ignored.
 * @summary Update project
 */
export const updateProject = (
    projectId: string,
    updateProjectSchema: BodyType<UpdateProjectSchema>
) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}`,
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        data: updateProjectSchema,
    });
};

/**
 * Permanently delete the provided project. All feature toggles in the project must be archived before you can delete it. This permanently deletes the project and its archived toggles. It can not be undone.
 * @summary Delete project
 */
export const deleteProject = (projectId: string) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}`,
        method: 'delete',
    });
};

/**
 * This endpoint returns an overview of the specified projects stats, project health, number of members, which environments are configured, and the features in the project.
 * @summary Get an overview of a project.
 */
export const getProjectOverview = (projectId: string) => {
    return fetcher<ProjectOverviewSchema>({
        url: `/api/admin/projects/${projectId}`,
        method: 'get',
    });
};

export const getGetProjectOverviewKey = (projectId: string) =>
    [`/api/admin/projects/${projectId}`] as const;

export type GetProjectOverviewQueryResult = NonNullable<
    Awaited<ReturnType<typeof getProjectOverview>>
>;
export type GetProjectOverviewQueryError = ErrorType<
    GetProjectOverview401 | GetProjectOverview403 | GetProjectOverview404
>;

/**
 * @summary Get an overview of a project.
 */
export const useGetProjectOverview = <
    TError = ErrorType<
        GetProjectOverview401 | GetProjectOverview403 | GetProjectOverview404
    >
>(
    projectId: string,
    options?: {
        swr?: SWRConfiguration<
            Awaited<ReturnType<typeof getProjectOverview>>,
            TError
        > & { swrKey?: Key; enabled?: boolean };
    }
) => {
    const { swr: swrOptions } = options ?? {};

    const isEnabled = swrOptions?.enabled !== false && !!projectId;
    const swrKey =
        swrOptions?.swrKey ??
        (() => (isEnabled ? getGetProjectOverviewKey(projectId) : null));
    const swrFn = () => getProjectOverview(projectId);

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
 * Update project enterprise settings with new values. Any fields not provided are ignored.
 * @summary Update project enterprise settings
 */
export const updateProjectEnterpriseSettings = (
    projectId: string,
    updateProjectEnterpriseSettingsSchema: BodyType<UpdateProjectEnterpriseSettingsSchema>
) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}/settings`,
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        data: updateProjectEnterpriseSettingsSchema,
    });
};

/**
 * Get users belonging to a project together with their roles as well as a list of roles available to the project. This endpoint is deprecated. Use `/:projectId/access` instead.
 * @deprecated
 * @summary Get users in project
 */
export const getProjectUsers = (projectId: string) => {
    return fetcher<ProjectUsersSchema>({
        url: `/api/admin/projects/${projectId}/users`,
        method: 'get',
    });
};

export const getGetProjectUsersKey = (projectId: string) =>
    [`/api/admin/projects/${projectId}/users`] as const;

export type GetProjectUsersQueryResult = NonNullable<
    Awaited<ReturnType<typeof getProjectUsers>>
>;
export type GetProjectUsersQueryError = ErrorType<
    GetProjectUsers401 | GetProjectUsers403
>;

/**
 * @deprecated
 * @summary Get users in project
 */
export const useGetProjectUsers = <
    TError = ErrorType<GetProjectUsers401 | GetProjectUsers403>
>(
    projectId: string,
    options?: {
        swr?: SWRConfiguration<
            Awaited<ReturnType<typeof getProjectUsers>>,
            TError
        > & { swrKey?: Key; enabled?: boolean };
    }
) => {
    const { swr: swrOptions } = options ?? {};

    const isEnabled = swrOptions?.enabled !== false && !!projectId;
    const swrKey =
        swrOptions?.swrKey ??
        (() => (isEnabled ? getGetProjectUsersKey(projectId) : null));
    const swrFn = () => getProjectUsers(projectId);

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
 * Get all groups, users and their roles, and available roles for the given project.
 * @summary Get users and groups in project
 */
export const getProjectAccess = (projectId: string) => {
    return fetcher<ProjectAccessSchema>({
        url: `/api/admin/projects/${projectId}/access`,
        method: 'get',
    });
};

export const getGetProjectAccessKey = (projectId: string) =>
    [`/api/admin/projects/${projectId}/access`] as const;

export type GetProjectAccessQueryResult = NonNullable<
    Awaited<ReturnType<typeof getProjectAccess>>
>;
export type GetProjectAccessQueryError = ErrorType<
    GetProjectAccess401 | GetProjectAccess403
>;

/**
 * @summary Get users and groups in project
 */
export const useGetProjectAccess = <
    TError = ErrorType<GetProjectAccess401 | GetProjectAccess403>
>(
    projectId: string,
    options?: {
        swr?: SWRConfiguration<
            Awaited<ReturnType<typeof getProjectAccess>>,
            TError
        > & { swrKey?: Key; enabled?: boolean };
    }
) => {
    const { swr: swrOptions } = options ?? {};

    const isEnabled = swrOptions?.enabled !== false && !!projectId;
    const swrKey =
        swrOptions?.swrKey ??
        (() => (isEnabled ? getGetProjectAccessKey(projectId) : null));
    const swrFn = () => getProjectAccess(projectId);

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
 * Configure project access for groups and single users. The provided users and groups will be given the roles specified in the payload.
 * @summary Configure project access
 */
export const addAccessToProject = (
    projectId: string,
    projectAddAccessSchema: BodyType<ProjectAddAccessSchema>
) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}/access`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: projectAddAccessSchema,
    });
};

/**
 * For the provided role, retrieves a list of projects that use this role. For each project it also contains information about how the role used in that project, such as how many users, groups, or service accounts that use the role.
 * @summary Get project-role mappings
 */
export const getRoleProjectAccess = (roleId: string) => {
    return fetcher<ProjectRoleUsageSchema>({
        url: `/api/admin/projects/roles/${roleId}/access`,
        method: 'get',
    });
};

export const getGetRoleProjectAccessKey = (roleId: string) =>
    [`/api/admin/projects/roles/${roleId}/access`] as const;

export type GetRoleProjectAccessQueryResult = NonNullable<
    Awaited<ReturnType<typeof getRoleProjectAccess>>
>;
export type GetRoleProjectAccessQueryError = ErrorType<
    GetRoleProjectAccess401 | GetRoleProjectAccess403
>;

/**
 * @summary Get project-role mappings
 */
export const useGetRoleProjectAccess = <
    TError = ErrorType<GetRoleProjectAccess401 | GetRoleProjectAccess403>
>(
    roleId: string,
    options?: {
        swr?: SWRConfiguration<
            Awaited<ReturnType<typeof getRoleProjectAccess>>,
            TError
        > & { swrKey?: Key; enabled?: boolean };
    }
) => {
    const { swr: swrOptions } = options ?? {};

    const isEnabled = swrOptions?.enabled !== false && !!roleId;
    const swrKey =
        swrOptions?.swrKey ??
        (() => (isEnabled ? getGetRoleProjectAccessKey(roleId) : null));
    const swrFn = () => getRoleProjectAccess(roleId);

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
 * Adds the specified user to a project with the provided role. This endpoint is deprecated. Use `/:projectId/access` instead.
 * @deprecated
 * @summary Add user to project
 */
export const addRoleToUser = (
    projectId: string,
    userId: string,
    roleId: string
) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}/users/${userId}/roles/${roleId}`,
        method: 'post',
    });
};

/**
 * Remove the specified project role from the specified user. This endpoint is deprecated. Use `/:projectId/users/:userId/roles` instead.
 * @deprecated
 * @summary Removes role from user
 */
export const removeRoleForUser = (
    projectId: string,
    userId: string,
    roleId: string
) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}/users/${userId}/roles/${roleId}`,
        method: 'delete',
    });
};

/**
 * Replaces the given user's project role with the provided role. The user must already be a memeber of the project. This endpoint is deprecated. Use `/:projectId/users/:userId/roles` instead.
 * @deprecated
 * @summary Update user's project role
 */
export const changeRoleForUser = (
    projectId: string,
    userId: string,
    roleId: string
) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}/users/${userId}/roles/${roleId}`,
        method: 'put',
    });
};

/**
 * Sets the roles a user has in the project.
 * @summary Sets roles for user
 */
export const setRolesForUser = (projectId: string, userId: string) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}/users/${userId}/roles`,
        method: 'put',
    });
};

/**
 * Removes project access for a user by removing all of its roles for the project.
 * @summary Remove project access for a user
 */
export const removeUserAccess = (projectId: string, userId: string) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}/users/${userId}/roles`,
        method: 'delete',
    });
};

/**
 * Sets the roles a group has in the project.
 * @summary Sets roles for group
 */
export const setRolesForGroup = (projectId: string, groupId: string) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}/groups/${groupId}/roles`,
        method: 'put',
    });
};

/**
 * Removes project access for a group by removing all of its roles for the project.
 * @summary Remove project access for a group
 */
export const removeGroupAccess = (projectId: string, groupId: string) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}/groups/${groupId}/roles`,
        method: 'delete',
    });
};

/**
 * Updates the permissions that the group has within the given project. This endpoint is deprecated. Use `/:projectId/users/:userId/roles` instead.
 * @deprecated
 * @summary Update group's project role
 */
export const changeRoleForGroup = (
    projectId: string,
    groupId: string,
    roleId: string
) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}/groups/${groupId}/roles/${roleId}`,
        method: 'put',
    });
};

/**
 * Removes a project role from a group. This endpoint is deprecated. Use `/:projectId/groups/:groupId/roles` instead.
 * @deprecated
 * @summary Remove project group role
 */
export const removeRoleFromGroup = (
    projectId: string,
    groupId: string,
    roleId: string
) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}/groups/${groupId}/roles/${roleId}`,
        method: 'delete',
    });
};

/**
 * Configure project access for groups and single users. The provided users and groups will be given the role specified in the URL parameters. This endpoint is deprecated. Use `/:projectId/access` instead.
 * @deprecated
 * @summary Configure project role access
 */
export const addRoleAccessToProject = (
    projectId: string,
    roleId: string,
    projectAddRoleAccessSchema: BodyType<ProjectAddRoleAccessSchema>
) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}/role/${roleId}/access`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: projectAddRoleAccessSchema,
    });
};

/**
 * This endpoint returns an overview of the specified dora metrics
 * @summary Get an overview project dora metrics.
 */
export const getProjectDora = (projectId: string) => {
    return fetcher<ProjectDoraMetricsSchema>({
        url: `/api/admin/projects/${projectId}/dora`,
        method: 'get',
    });
};

export const getGetProjectDoraKey = (projectId: string) =>
    [`/api/admin/projects/${projectId}/dora`] as const;

export type GetProjectDoraQueryResult = NonNullable<
    Awaited<ReturnType<typeof getProjectDora>>
>;
export type GetProjectDoraQueryError = ErrorType<
    GetProjectDora401 | GetProjectDora403 | GetProjectDora404
>;

/**
 * @summary Get an overview project dora metrics.
 */
export const useGetProjectDora = <
    TError = ErrorType<
        GetProjectDora401 | GetProjectDora403 | GetProjectDora404
    >
>(
    projectId: string,
    options?: {
        swr?: SWRConfiguration<
            Awaited<ReturnType<typeof getProjectDora>>,
            TError
        > & { swrKey?: Key; enabled?: boolean };
    }
) => {
    const { swr: swrOptions } = options ?? {};

    const isEnabled = swrOptions?.enabled !== false && !!projectId;
    const swrKey =
        swrOptions?.swrKey ??
        (() => (isEnabled ? getGetProjectDoraKey(projectId) : null));
    const swrFn = () => getProjectDora(projectId);

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
 * This endpoint adds the provided environment to the specified project, with optional support for enabling and disabling change requests for the environment and project.
 * @summary Add an environment to a project.
 */
export const addEnvironmentToProject = (
    projectId: string,
    projectEnvironmentSchema: BodyType<ProjectEnvironmentSchema>
) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}/environments`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: projectEnvironmentSchema,
    });
};

/**
 * This endpoint removes the specified environment from the project.
 * @summary Remove an environment from a project.
 */
export const removeEnvironmentFromProject = (
    projectId: string,
    environment: string
) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}/environments/${environment}`,
        method: 'delete',
    });
};

/**
 * Adds a default strategy for this environment. Unleash will use this strategy by default when enabling a toggle. Use the wild card "*" for `:environment` to add to all environments.
 * @summary Set environment-default strategy
 */
export const addDefaultStrategyToProjectEnvironment = (
    projectId: string,
    environment: string,
    createFeatureStrategySchema: BodyType<CreateFeatureStrategySchema>
) => {
    return fetcher<CreateFeatureStrategySchema>({
        url: `/api/admin/projects/${projectId}/environments/${environment}/default-strategy`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: createFeatureStrategySchema,
    });
};

/**
 * This endpoint returns a health report for the specified project. This data is used for [the technical debt dashboard](https://docs.getunleash.io/reference/technical-debt#the-technical-debt-dashboard)
 * @summary Get a health report for a project.
 */
export const getProjectHealthReport = (projectId: string) => {
    return fetcher<HealthReportSchema>({
        url: `/api/admin/projects/${projectId}/health-report`,
        method: 'get',
    });
};

export const getGetProjectHealthReportKey = (projectId: string) =>
    [`/api/admin/projects/${projectId}/health-report`] as const;

export type GetProjectHealthReportQueryResult = NonNullable<
    Awaited<ReturnType<typeof getProjectHealthReport>>
>;
export type GetProjectHealthReportQueryError = ErrorType<
    | GetProjectHealthReport401
    | GetProjectHealthReport403
    | GetProjectHealthReport404
>;

/**
 * @summary Get a health report for a project.
 */
export const useGetProjectHealthReport = <
    TError = ErrorType<
        | GetProjectHealthReport401
        | GetProjectHealthReport403
        | GetProjectHealthReport404
    >
>(
    projectId: string,
    options?: {
        swr?: SWRConfiguration<
            Awaited<ReturnType<typeof getProjectHealthReport>>,
            TError
        > & { swrKey?: Key; enabled?: boolean };
    }
) => {
    const { swr: swrOptions } = options ?? {};

    const isEnabled = swrOptions?.enabled !== false && !!projectId;
    const swrKey =
        swrOptions?.swrKey ??
        (() => (isEnabled ? getGetProjectHealthReportKey(projectId) : null));
    const swrFn = () => getProjectHealthReport(projectId);

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
 * Returns the [project API tokens](https://docs.getunleash.io/how-to/how-to-create-project-api-tokens) that have been created for this project.
 * @summary Get api tokens for project.
 */
export const getProjectApiTokens = (projectId: string) => {
    return fetcher<ApiTokensSchema>({
        url: `/api/admin/projects/${projectId}/api-tokens`,
        method: 'get',
    });
};

export const getGetProjectApiTokensKey = (projectId: string) =>
    [`/api/admin/projects/${projectId}/api-tokens`] as const;

export type GetProjectApiTokensQueryResult = NonNullable<
    Awaited<ReturnType<typeof getProjectApiTokens>>
>;
export type GetProjectApiTokensQueryError = ErrorType<
    GetProjectApiTokens401 | GetProjectApiTokens403 | GetProjectApiTokens404
>;

/**
 * @summary Get api tokens for project.
 */
export const useGetProjectApiTokens = <
    TError = ErrorType<
        GetProjectApiTokens401 | GetProjectApiTokens403 | GetProjectApiTokens404
    >
>(
    projectId: string,
    options?: {
        swr?: SWRConfiguration<
            Awaited<ReturnType<typeof getProjectApiTokens>>,
            TError
        > & { swrKey?: Key; enabled?: boolean };
    }
) => {
    const { swr: swrOptions } = options ?? {};

    const isEnabled = swrOptions?.enabled !== false && !!projectId;
    const swrKey =
        swrOptions?.swrKey ??
        (() => (isEnabled ? getGetProjectApiTokensKey(projectId) : null));
    const swrFn = () => getProjectApiTokens(projectId);

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
 * Endpoint that allows creation of [project API tokens](https://docs.getunleash.io/reference/api-tokens-and-client-keys#api-token-visibility) for the specified project.
 * @summary Create a project API token.
 */
export const createProjectApiToken = (
    projectId: string,
    createApiTokenSchema: BodyType<CreateApiTokenSchema>
) => {
    return fetcher<ApiTokenSchema>({
        url: `/api/admin/projects/${projectId}/api-tokens`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: createApiTokenSchema,
    });
};

/**
 * This operation deletes the API token specified in the request URL. If the token doesn't exist, returns an OK response (status code 200).
 * @summary Delete a project API token.
 */
export const deleteProjectApiToken = (projectId: string, token: string) => {
    return fetcher<void>({
        url: `/api/admin/projects/${projectId}/api-tokens/${token}`,
        method: 'delete',
    });
};
