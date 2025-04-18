export type ConnectedEdge = {
    id?: string;
    appName: string;
    connectedStreamingClients: number;
    edgeVersion: string;
    instanceId: string;
    region: string | null;
    reportedAt: string;
    started: string;
    connectedVia?: string;
    cpuUsage: string;
    memoryUsage: number;
    clientFeaturesAverageLatencyMs: string;
    clientFeaturesP99LatencyMs: string;
    frontendApiAverageLatencyMs: string;
    frontendApiP99LatencyMs: string;
    upstreamFeaturesAverageLatencyMs: string;
    upstreamFeaturesP99LatencyMs: string;
    upstreamMetricsAverageLatencyMs: string;
    upstreamMetricsP99LatencyMs: string;
    upstreamEdgeAverageLatencyMs: string;
    upstreamEdgeP99LatencyMs: string;
};
