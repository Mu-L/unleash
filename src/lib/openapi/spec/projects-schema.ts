import type { FromSchema } from 'json-schema-to-ts';
import { projectSchema } from './project-schema.js';

export const projectsSchema = {
    $id: '#/components/schemas/projectsSchema',
    type: 'object',
    additionalProperties: false,
    required: ['version', 'projects'],
    description: 'An overview of all the projects in the Unleash instance',
    properties: {
        version: {
            type: 'integer',
            description:
                'The schema version used to represent the project data.',
            example: 1,
        },
        projects: {
            type: 'array',
            items: {
                $ref: '#/components/schemas/projectSchema',
            },
            description: 'A list of projects in the Unleash instance',
        },
    },
    components: {
        schemas: {
            projectSchema,
        },
    },
} as const;

export type ProjectsSchema = FromSchema<typeof projectsSchema>;
