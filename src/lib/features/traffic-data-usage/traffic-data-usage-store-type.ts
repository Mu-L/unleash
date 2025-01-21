import type { Store } from '../../types/stores/store';

export type IStatTrafficUsage = {
    day: Date;
    trafficGroup: string;
    statusCodeSeries: number;
    count: number;
};

export type IStatMonthlyTrafficUsage = {
    month: Date;
    trafficGroup: string;
    statusCodeSeries: number;
    count: number;
};

export interface IStatTrafficUsageKey {
    day: Date;
    trafficGroup: string;
    statusCodeSeries: number;
}

export interface ITrafficDataUsageStore
    extends Store<IStatTrafficUsage, IStatTrafficUsageKey> {
    upsert(trafficDataUsage: IStatTrafficUsage): Promise<void>;
    getTrafficDataUsageForPeriod(period: string): Promise<IStatTrafficUsage[]>;
    getTrafficDataForMonthRange(
        monthsBack: number,
    ): Promise<IStatMonthlyTrafficUsage[]>;
}
