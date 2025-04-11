/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * A definition of the project environment
 */
export interface EnvironmentSchema {
    /**
     * The number of API tokens for the project environment
     * @minimum 0
     * @nullable
     */
    apiTokenCount?: number | null;
    /** `true` if the environment is enabled for the project, otherwise `false`. */
    enabled: boolean;
    /**
     * The number of enabled toggles for the project environment
     * @minimum 0
     * @nullable
     */
    enabledToggleCount?: number | null;
    /** The name of the environment */
    name: string;
    /**
     * The number of projects with this environment
     * @minimum 0
     * @nullable
     */
    projectCount?: number | null;
    /** `true` if the environment is protected, otherwise `false`. A *protected* environment can not be deleted. */
    protected: boolean;
    /**
     * Experimental field. The number of approvals required before a change request can be applied in this environment.
     * @minimum 1
     * @nullable
     */
    requiredApprovals?: number | null;
    /** Priority of the environment in a list of environments, the lower the value, the higher up in the list the environment will appear. Needs to be an integer */
    sortOrder: number;
    /** The [type of environment](https://docs.getunleash.io/reference/environments#environment-types). */
    type: string;
}
