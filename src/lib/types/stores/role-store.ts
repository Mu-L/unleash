import type { RoleSchema } from '../../openapi/index.js';
import type { ICustomRole } from '../model.js';
import type { IRole, IUserRole } from './access-store.js';
import type { Store } from './store.js';

export interface ICustomRoleInsert {
    name: string;
    description: string;
    roleType: string;
}

export interface ICustomRoleUpdate {
    id: number;
    name: string;
    description: string;
    roleType: string;
}

export interface IRoleStore extends Store<ICustomRole, number> {
    getAll(): Promise<ICustomRole[]>;
    create(role: ICustomRoleInsert): Promise<ICustomRole>;
    update(role: ICustomRoleUpdate): Promise<ICustomRole>;
    delete(id: number): Promise<void>;
    getRoles(): Promise<IRole[]>;
    getRoleByName(name: string): Promise<IRole>;
    getRolesForProject(projectId: string): Promise<IRole[]>;
    removeRolesForProject(projectId: string): Promise<void>;
    getProjectRoles(): Promise<IRole[]>;
    getRootRoles(): Promise<IRole[]>;
    getRootRoleForAllUsers(): Promise<IUserRole[]>;
    nameInUse(name: string, existingId?: number): Promise<boolean>;
    count(): Promise<number>;
    filteredCount(filter: Partial<RoleSchema>): Promise<number>;
    filteredCountInUse(filter: Partial<RoleSchema>): Promise<number>;
}
