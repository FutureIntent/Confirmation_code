// eslint-disable-next-line import/no-unresolved
import ChinaTranslations from '@i18n/translations/ch.json';
// eslint-disable-next-line import/no-unresolved
import EnglishTranslations from '@i18n/translations/en.json';
// eslint-disable-next-line import/no-unresolved
import RussianTranslations from '@i18n/translations/ru.json';
import i18n from 'i18next';

// eslint-disable-next-line jest/require-hook
i18n.init({
    resources: {
        ru: {
            translation: RussianTranslations,
        },
        en: {
            translation: EnglishTranslations,
        },
        cn: {
            translation: ChinaTranslations,
        },
    },
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    react: {
        useSuspense: false,
    },
    keySeparator: '.',
});

export default i18n;
