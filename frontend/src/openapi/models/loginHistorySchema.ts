/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { LoginEventSchema } from './loginEventSchema.js';

/**
 * A response model with a list of login events.
 */
export interface LoginHistorySchema {
    /** A list of login events */
    events: LoginEventSchema[];
}
