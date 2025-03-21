import type { IFavoriteProjectsStore } from '../../lib/types';
import type { IFavoriteProjectKey } from '../../lib/types/stores/favorite-projects';
import type { IFavoriteProject } from '../../lib/types/favorites';
/* eslint-disable @typescript-eslint/no-unused-vars */
export default class FakeFavoriteProjectsStore
    implements IFavoriteProjectsStore
{
    addFavoriteProject(
        favorite: IFavoriteProjectKey,
    ): Promise<IFavoriteProject | undefined> {
        return Promise.resolve(undefined);
    }

    delete(key: IFavoriteProjectKey): Promise<void> {
        return Promise.resolve(undefined);
    }

    deleteAll(): Promise<void> {
        return Promise.resolve(undefined);
    }

    destroy(): void {}

    exists(key: IFavoriteProjectKey): Promise<boolean> {
        return Promise.resolve(false);
    }

    get(key: IFavoriteProjectKey): Promise<IFavoriteProject | undefined> {
        return Promise.resolve(undefined);
    }

    getAll(query?: Object): Promise<IFavoriteProject[]> {
        return Promise.resolve([]);
    }
}
