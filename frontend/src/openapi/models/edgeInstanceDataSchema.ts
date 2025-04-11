/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ConnectionConsumptionSchema } from './connectionConsumptionSchema';
import type { EdgeUpstreamLatencySchema } from './edgeUpstreamLatencySchema';
import type { EdgeProcessMetricsSchema } from './edgeProcessMetricsSchema';
import type { RequestConsumptionSchema } from './requestConsumptionSchema';
import type { EdgeRequestStatsSchema } from './edgeRequestStatsSchema';
import type { EdgeInstanceTrafficSchema } from './edgeInstanceTrafficSchema';

/**
 * Represents Edge instance observability data.
 */
export interface EdgeInstanceDataSchema {
    /** The name of the application, configured by the user, typically persistent across restarts of Edge. */
    appName: string;
    /** A list of Edge instances connected to the Edge instance. */
    connectedEdges: EdgeInstanceDataSchema[];
    /**
     * How many streaming clients are connected to the Edge instance.
     * @minimum 0
     */
    connectedStreamingClients: number;
    /** Connection consumption data since last report, including features and metrics consumption. Used for long-lived backend SDKs with backend controlled number of instances. */
    connectionConsumptionSinceLastReport?: ConnectionConsumptionSchema;
    /** Which version (semver) of Edge is the Edge instance running. */
    edgeVersion: string;
    /** The ID of the Edge process, typically a ULID. Newly generated for each restart of the instance. */
    identifier: string;
    latencyUpstream: EdgeUpstreamLatencySchema;
    /** @nullable */
    processMetrics?: EdgeProcessMetricsSchema;
    /**
     * Which region the Edge instance is running in. Set to AWS_REGION by default (if present).
     * @nullable
     */
    region?: string | null;
    /** Request consumption data since last report, grouped by metered group. User for frontend SDKs with unpredictable and potentially large number of user devices running those SDKs. */
    requestConsumptionSinceLastReport?: RequestConsumptionSchema;
    /** Requests made to edge's endpoints since last report. Meant to be used for billing purposes. */
    requestsSinceLastReport?: EdgeRequestStatsSchema;
    /** RFC3339 timestamp for when the Edge instance was started. */
    started: string;
    traffic: EdgeInstanceTrafficSchema;
}
