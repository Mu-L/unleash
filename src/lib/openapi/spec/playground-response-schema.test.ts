import fc, { type Arbitrary } from 'fast-check';
import {
    playgroundResponseSchema,
    type PlaygroundResponseSchema,
} from '../../../lib/openapi/spec/playground-response-schema.js';
import { validateSchema } from '../validate.js';
import { generate as generateInput } from './playground-request-schema.test.js';
import { generate as generateFeature } from './playground-feature-schema.test.js';

const generate = (): Arbitrary<PlaygroundResponseSchema> =>
    fc.record({
        input: generateInput(),
        features: fc.uniqueArray(generateFeature(), {
            selector: (feature) => feature.name,
        }),
    });

test('playgroundResponseSchema', () =>
    fc.assert(
        fc.property(
            generate(),
            (data: PlaygroundResponseSchema) =>
                validateSchema(playgroundResponseSchema.$id, data) ===
                undefined,
        ),
    ));
