import { supportedLanguages } from '@theme/const';

export type SupportedLocales = typeof supportedLanguages[number];

export const localesMap: { [key: string]: { flag: string; name: string; nativeName: string } } = {
    en: {
        flag: 'US',
        name: 'EN',
        nativeName: 'EN',
    },
    ch: {
        flag: 'CN',
        name: 'CN',
        nativeName: 'CN',
    },
    ru: {
        flag: 'RU',
        name: 'RU',
        nativeName: 'RU',
    },
};
