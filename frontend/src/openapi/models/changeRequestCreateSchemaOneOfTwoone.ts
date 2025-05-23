/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestCreateSchemaOneOfTwooneAction } from './changeRequestCreateSchemaOneOfTwooneAction.js';
import type { SetStrategySortOrderSchema } from './setStrategySortOrderSchema.js';

/**
 * Reorder strategies for this feature
 */
export type ChangeRequestCreateSchemaOneOfTwoone = {
    /** The name of this action. */
    action: ChangeRequestCreateSchemaOneOfTwooneAction;
    /** The name of the feature that this change applies to. */
    feature: string;
    payload: SetStrategySortOrderSchema;
};
