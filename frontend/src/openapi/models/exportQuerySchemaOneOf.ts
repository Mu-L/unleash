/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

export type ExportQuerySchemaOneOf = {
    /** The environment to export from */
    environment: string;
    /** Whether to return a downloadable file */
    downloadFile?: boolean;
    /** Selects features to export by name. */
    features: string[];
};
