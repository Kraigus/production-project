import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileFirstname } from './getProfileFirstname';

describe('getProfileFirstname.test', () => {
    test('should return data', () => {
        const data = {
            username: 'admin',
            age: 27,
            country: Country.Belarus,
            lastname: 'Eliseev',
            first: 'Anton',
            city: 'Kng',
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileFirstname(state as StateSchema)).toEqual('Anton');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFirstname(state as StateSchema)).toEqual('');
    });
});
