import type {
    IImportTogglesStore,
    ProjectFeaturesLimit,
} from './import-toggles-store-type.js';
import type { Db } from '../../db/db.js';

const T = {
    featureStrategies: 'feature_strategies',
    features: 'features',
    featureTag: 'feature_tag',
    projectSettings: 'project_settings',
    links: 'feature_link',
};
export class ImportTogglesStore implements IImportTogglesStore {
    private db: Db;

    constructor(db: Db) {
        this.db = db;
    }

    async getDisplayPermissions(
        names: string[],
    ): Promise<{ name: string; displayName: string }[]> {
        const rows = await this.db
            .from('permissions')
            .whereIn('permission', names);
        return rows.map((row) => ({
            name: row.permission,
            displayName: row.display_name,
        }));
    }

    async deleteStrategiesForFeatures(
        featureNames: string[],
        environment: string,
    ): Promise<void> {
        return this.db(T.featureStrategies)
            .where({ environment })
            .whereIn('feature_name', featureNames)
            .del();
    }

    async strategiesExistForFeatures(
        featureNames: string[],
        environment: string,
    ): Promise<boolean> {
        if (featureNames.length === 0) return true;
        const joinedFeatureNames = featureNames.map(() => '?').join(',');
        const result = await this.db.raw(
            `SELECT EXISTS (SELECT 1 FROM feature_strategies WHERE environment = ? and feature_name in (${joinedFeatureNames})) AS present`,
            [environment, ...featureNames],
        );
        const { present } = result.rows[0];
        return present;
    }

    async getArchivedFeatures(featureNames: string[]): Promise<string[]> {
        const rows = await this.db(T.features)
            .select('name')
            .whereNot('archived_at', null)
            .whereIn('name', featureNames);
        return rows.map((row) => row.name);
    }

    async getExistingFeatures(featureNames: string[]): Promise<string[]> {
        const rows = await this.db(T.features).whereIn('name', featureNames);
        return rows.map((row) => row.name);
    }

    async getFeaturesInOtherProjects(
        featureNames: string[],
        project: string,
    ): Promise<{ name: string; project: string }[]> {
        const rows = await this.db(T.features)
            .select(['name', 'project'])
            .whereNot('project', project)
            .whereIn('name', featureNames);
        return rows.map((row) => ({ name: row.name, project: row.project }));
    }

    async getFeaturesInProject(
        featureNames: string[],
        project: string,
    ): Promise<string[]> {
        const rows = await this.db(T.features)
            .select(['name', 'project'])
            .where('project', project)
            .where('archived_at', null)
            .whereIn('name', featureNames);
        return rows.map((row) => row.name);
    }

    async getProjectFeaturesLimit(
        featureNames: string[],
        project: string,
    ): Promise<ProjectFeaturesLimit> {
        const row = await this.db(T.projectSettings)
            .select(['feature_limit'])
            .where('project', project)
            .first();
        const limit: number = row?.feature_limit ?? Number.MAX_SAFE_INTEGER;

        const existingFeaturesCount = await this.db(T.features)
            .whereIn('name', featureNames)
            .andWhere('project', project)
            .where('archived_at', null)
            .count()
            .then((res) => Number(res[0].count));

        const newFeaturesCount = featureNames.length - existingFeaturesCount;

        const currentFeaturesCount = await this.db(T.features)
            .where('project', project)
            .count()
            .where('archived_at', null)
            .then((res) => Number(res[0].count));

        return {
            limit,
            newFeaturesCount,
            currentFeaturesCount,
        };
    }

    async deleteTagsForFeatures(features: string[]): Promise<void> {
        return this.db(T.featureTag).whereIn('feature_name', features).del();
    }

    async deleteLinksForFeatures(features: string[]): Promise<void> {
        return this.db(T.links).whereIn('feature_name', features).del();
    }
}
