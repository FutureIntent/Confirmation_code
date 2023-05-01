export type Languages = 'en' | 'el' | 'ru';

export const supportedLanguages = ['en', 'ru', 'ch'] as const;

export type LanguageLocales = { Languages: string };

export const socialsLinks = {
    facebook: 'https://www.facebook.com/100080134106374',
    twitter: 'https://twitter.com/surfinite',
    youtube: 'https://www.youtube.com/channel/UCTB3Fk-5Ye3mEXcgbw-t5pg',
    linkedin: '#',
};

export const DefaultFetchURL = "https://api.surfinite.com";
