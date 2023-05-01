import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

// eslint-disable-next-line jest/require-hook
dayjs.extend(customParseFormat);

export const BETA_REGISTRATION_END = '01.11.22';

export const appConfig = {
    beta: {
        isActive: dayjs(BETA_REGISTRATION_END, 'DD.MM.YY').isAfter(dayjs()),
    },
    tariffs: [
        {
            key: 'mini',
            name: 'Mini',
            price: {
                monthly: 29,
                mon3: 79,
                mon6: 149,
                mon12: 279,
            },
            includes: {
                profiles: 30,
                users: 1,
                api: false,
            },
        },
        {
            key: 'starter',
            name: 'Starter',
            price: {
                monthly: 89,
                mon3: 239,
                mon6: 459,
                mon12: 859,
                userStep: 10,
            },
            includes: {
                profiles: 120,
                users: 1,
                api: false,
            },
        },
        {
            key: 'advanced',
            name: 'Advanced',
            price: {
                monthly: 169,
                mon3: 459,
                mon6: 869,
                mon12: 1629,
                userStep: 15,
            },
            includes: {
                profiles: 350,
                users: 3,
                api: true,
            },
        },
        {
            key: 'ultimate',
            name: 'Ultimate',
            price: {
                monthly: 369,
                mon3: 999,
                mon6: 1889,
                mon12: 3549,
                userStep: 20,
                profileStep: 0.2,
            },
            includes: {
                profiles: 1000,
                users: 6,
                api: true,
            },
        },
    ],
};
