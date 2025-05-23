/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestCreateFeatureSchemaOneOfEightAction } from './changeRequestCreateFeatureSchemaOneOfEightAction.js';
import type { ChangeRequestCreateFeatureSchemaOneOfEightPayload } from './changeRequestCreateFeatureSchemaOneOfEightPayload.js';

/**
 * Delete a strategy from this feature.
 */
export type ChangeRequestCreateFeatureSchemaOneOfEight = {
    /** The name of this action. */
    action: ChangeRequestCreateFeatureSchemaOneOfEightAction;
    /** The name of the feature that this change applies to. */
    feature: string;
    payload: ChangeRequestCreateFeatureSchemaOneOfEightPayload;
};
