import type { IUnleashStores } from '../types/stores';
import type { IUnleashConfig } from '../types/option';
import type { Logger } from '../logger';
import type { IProject, IProjectHealthReport } from '../types/model';
import type { IFeatureToggleStore } from '../features/feature-toggle/types/feature-toggle-store-type';
import type { IFeatureTypeStore } from '../types/stores/feature-type-store';
import type { IProjectStore } from '../features/project/project-store-type';
import type ProjectService from '../features/project/project-service';
import {
    calculateProjectHealth,
    calculateProjectHealthRating,
} from '../domain/project-health/project-health';
import { batchExecute } from '../util';
import metricsHelper from '../util/metrics-helper';
import { FUNCTION_TIME } from '../metric-events';

export default class ProjectHealthService {
    private logger: Logger;

    private projectStore: IProjectStore;

    private featureTypeStore: IFeatureTypeStore;

    private featureToggleStore: IFeatureToggleStore;

    private projectService: ProjectService;

    calculateHealthRating: (project: Pick<IProject, 'id'>) => Promise<number>;

    private timer: Function;

    constructor(
        {
            projectStore,
            featureTypeStore,
            featureToggleStore,
        }: Pick<
            IUnleashStores,
            'projectStore' | 'featureTypeStore' | 'featureToggleStore'
        >,
        { getLogger, eventBus }: Pick<IUnleashConfig, 'getLogger' | 'eventBus'>,
        projectService: ProjectService,
    ) {
        this.logger = getLogger('services/project-health-service.ts');
        this.projectStore = projectStore;
        this.featureTypeStore = featureTypeStore;
        this.featureToggleStore = featureToggleStore;

        this.projectService = projectService;
        this.calculateHealthRating = calculateProjectHealthRating(
            this.featureTypeStore,
            this.featureToggleStore,
        );
        this.timer = (functionName: string) =>
            metricsHelper.wrapTimer(eventBus, FUNCTION_TIME, {
                className: 'ProjectHealthService',
                functionName,
            });
    }

    async getProjectHealthReport(
        projectId: string,
    ): Promise<IProjectHealthReport> {
        const featureTypes = await this.featureTypeStore.getAll();

        const overview = await this.projectService.getProjectHealth(
            projectId,
            false,
            undefined,
        );

        const healthRating = calculateProjectHealth(
            overview.features,
            featureTypes,
        );

        return {
            ...overview,
            ...healthRating,
        };
    }

    async setHealthRating(batchSize = 1): Promise<void> {
        const projects = await this.projectStore.getAll();

        void batchExecute(projects, batchSize, 5000, (project) =>
            this.setProjectHealthRating(project.id),
        );
    }

    async setProjectHealthRating(projectId: string): Promise<void> {
        const stopTimer = this.timer('setProjectHealthRating');
        const newHealth = await this.calculateHealthRating({ id: projectId });
        await this.projectStore.updateHealth({
            id: projectId,
            health: newHealth,
        });
        stopTimer();
    }
}
