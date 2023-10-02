/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * [Custom root roles](https://docs.getunleash.io/reference/rbac#custom-root-roles) are root roles with a custom set of permissions.
 */
export type CreateRoleWithPermissionsSchemaOneOfType =
    typeof CreateRoleWithPermissionsSchemaOneOfType[keyof typeof CreateRoleWithPermissionsSchemaOneOfType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CreateRoleWithPermissionsSchemaOneOfType = {
    'root-custom': 'root-custom',
    custom: 'custom',
} as const;
