/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { UserAccessSchema } from './userAccessSchema.js';

/**
 * Data containing an overview of all the projects and groups users have access to
 */
export interface AccessOverviewSchema {
    /** A list of user access details */
    overview?: UserAccessSchema[];
}
