/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestReviewerSchema } from './changeRequestReviewerSchema.js';

/**
 * A list of users available to review a change request.
 */
export interface ChangeRequestAvailableReviewersSchema {
    /** a list of reviewers */
    reviewers: ChangeRequestReviewerSchema[];
}
