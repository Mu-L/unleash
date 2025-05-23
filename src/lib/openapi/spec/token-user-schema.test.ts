import { validateSchema } from '../validate.js';
import type { TokenUserSchema } from './token-user-schema.js';

test('tokenUserSchema', () => {
    const data: TokenUserSchema = {
        id: 0,
        name: '',
        email: '',
        createdBy: '',
        token: '',
        role: {
            id: 0,
            description: '',
            name: '',
            type: '',
        },
    };

    expect(
        validateSchema('#/components/schemas/tokenUserSchema', data),
    ).toBeUndefined();

    expect(
        validateSchema('#/components/schemas/tokenUserSchema', {}),
    ).toMatchSnapshot();
});
