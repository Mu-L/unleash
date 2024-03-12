import fetch from 'make-fetch-happen';
import { addonDefinitionSchema } from './addon-schema';
import type { IUnleashConfig } from '../types/option';
import type { Logger } from '../logger';
import type { IAddonDefinition } from '../types/model';
import type { IEvent } from '../types/events';

export default abstract class Addon {
    logger: Logger;

    _name: string;

    _definition: IAddonDefinition;

    constructor(
        definition: IAddonDefinition,
        { getLogger }: Pick<IUnleashConfig, 'getLogger'>,
    ) {
        this.logger = getLogger(`addon/${definition.name}`);
        const { error } = addonDefinitionSchema.validate(definition);
        if (error) {
            this.logger.warn(
                `Could not load addon provider ${definition.name}`,
                error,
            );
            throw error;
        }
        this._name = definition.name;
        this._definition = definition;
    }

    get name(): string {
        return this._name;
    }

    get definition(): IAddonDefinition {
        return this._definition;
    }

    async fetchRetry(
        url: string,
        options: any = {},
        retries: number = 1,
    ): Promise<Response> {
        // biome-ignore lint/suspicious/noImplicitAnyLet: Due to calling upstream, it's not easy knowing the real type here
        let res;
        try {
            res = await fetch(url, {
                retry: {
                    retries,
                },
                ...options,
            });
            return res;
        } catch (e) {
            const { method } = options;
            this.logger.warn(
                `Error querying ${url} with method ${
                    method || 'GET'
                } status code ${e.code}`,
                e,
            );
            res = { statusCode: e.code, ok: false };
        }
        return res;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    abstract handleEvent(event: IEvent, parameters: any): Promise<void>;

    destroy?(): void;
}
