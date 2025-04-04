/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ProjectStatusSchemaLifecycleSummaryArchived } from './projectStatusSchemaLifecycleSummaryArchived';
import type { ProjectStatusSchemaLifecycleSummaryCompleted } from './projectStatusSchemaLifecycleSummaryCompleted';
import type { ProjectStatusSchemaLifecycleSummaryInitial } from './projectStatusSchemaLifecycleSummaryInitial';
import type { ProjectStatusSchemaLifecycleSummaryLive } from './projectStatusSchemaLifecycleSummaryLive';
import type { ProjectStatusSchemaLifecycleSummaryPreLive } from './projectStatusSchemaLifecycleSummaryPreLive';

/**
 * Feature flag lifecycle statistics for this project.
 */
export type ProjectStatusSchemaLifecycleSummary = {
    /** Information on archived flags in this project. */
    archived: ProjectStatusSchemaLifecycleSummaryArchived;
    /** Statistics on feature flags in a given stage in this project. */
    completed: ProjectStatusSchemaLifecycleSummaryCompleted;
    /** Statistics on feature flags in a given stage in this project. */
    initial: ProjectStatusSchemaLifecycleSummaryInitial;
    /** Statistics on feature flags in a given stage in this project. */
    live: ProjectStatusSchemaLifecycleSummaryLive;
    /** Statistics on feature flags in a given stage in this project. */
    preLive: ProjectStatusSchemaLifecycleSummaryPreLive;
};
