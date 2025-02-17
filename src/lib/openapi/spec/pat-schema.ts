import type { FromSchema } from 'json-schema-to-ts';
import { createPatSchema } from './create-pat-schema';

export const patSchema = {
    $id: '#/components/schemas/patSchema',
    type: 'object',
    description:
        'Describes a [personal access token](https://docs.getunleash.io/reference/api-tokens-and-client-keys#personal-access-tokens), or PAT. PATs are automatically scoped to the authenticated user.',
    required: ['id', 'createdAt', ...createPatSchema.required],
    properties: {
        id: {
            type: 'integer',
            description: `The PAT's ID. PAT IDs are incrementing integers. In other words, a more recently created PAT will always have a higher ID than an older one.`,
            example: 1,
            minimum: 1,
        },
        secret: {
            type: 'string',
            description:
                'The token used for authentication. It is automatically generated by Unleash when the PAT is created and that is the only time this property is returned.',
            example: 'user:xyzrandomstring',
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
            example: '2023-04-19T08:15:14.000Z',
            description: 'The date and time of when the PAT was created.',
        },
        seenAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
            example: '2023-04-19T08:15:14.000Z',
            description:
                'When the PAT was last seen/used to authenticate with. `null` if it has not been used yet.',
        },
        userId: {
            type: 'integer',
            description: 'The ID of the user this PAT belongs to.',
            example: 1337,
        },
        ...createPatSchema.properties,
    },
    components: {
        schemas: {},
    },
} as const;

export type PatSchema = FromSchema<typeof patSchema>;
