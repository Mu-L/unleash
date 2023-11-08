import { SKIP_CHANGE_REQUEST } from '../../types';
import { Db } from '../../db/db';
import { AccessService } from '../../services';
import User from '../../types/user';
import { IChangeRequestAccessReadModel } from './change-request-access-read-model';

export class ChangeRequestAccessReadModel
    implements IChangeRequestAccessReadModel
{
    private db: Db;

    private accessService: AccessService;

    constructor(db: Db, accessService: AccessService) {
        this.db = db;
        this.accessService = accessService;
    }

    public async canBypassChangeRequest(
        project: string,
        environment: string,
        user?: User,
    ): Promise<boolean> {
        const [canSkipChangeRequest, changeRequestEnabled] = await Promise.all([
            user
                ? this.accessService.hasPermission(
                      user,
                      SKIP_CHANGE_REQUEST,
                      project,
                      environment,
                  )
                : Promise.resolve(false),
            this.isChangeRequestsEnabled(project, environment),
        ]);
        return canSkipChangeRequest || !changeRequestEnabled;
    }

    public async canBypassChangeRequestForProject(
        project: string,
        user?: User,
    ): Promise<boolean> {
        const [canSkipChangeRequest, changeRequestEnabled] = await Promise.all([
            user
                ? this.accessService.hasPermission(
                      user,
                      SKIP_CHANGE_REQUEST,
                      project,
                  )
                : Promise.resolve(false),
            this.isChangeRequestsEnabledForProject(project),
        ]);
        return canSkipChangeRequest || !changeRequestEnabled;
    }

    public async isChangeRequestsEnabled(
        project: string,
        environment: string,
    ): Promise<boolean> {
        const result = await this.db.raw(
            `SELECT EXISTS(SELECT 1
                           FROM change_request_settings
                           WHERE environment = ?
                             and project = ?) AS present`,
            [environment, project],
        );
        const { present } = result.rows[0];
        return present;
    }

    public async isChangeRequestsEnabledForProject(
        project: string,
    ): Promise<boolean> {
        const result = await this.db.raw(
            `SELECT EXISTS(SELECT 1
                           FROM change_request_settings
                           WHERE project = ?
                           ) AS present`,
            [project],
        );
        const { present } = result.rows[0];
        return present;
    }

    public async isSegmentUsedInActiveChangeRequests(
        segmentId: number,
    ): Promise<boolean> {
        const result = await this.db.raw(
            `SELECT *
            FROM change_request_events
            WHERE change_request_id IN (
            SELECT id
            FROM change_requests
            WHERE state IN ('Draft', 'In Review', 'Scheduled', 'Approved')
            )
            AND action IN ('updateStrategy', 'addStrategy');`,
        );

        const isUsed = result.rows.some((row) =>
            row.payload?.segments?.includes(segmentId),
        );

        return isUsed;
    }
}
