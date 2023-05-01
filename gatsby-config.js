const myCustomQueries = {
    mobile: '(min-width: 320px)',
    mobileM: '(min-width: 360px)',
    mobileL: '(min-width: 568px)',
    tablet: '(min-width: 768px)',
    tabletL: '(min-width: 1024px)',
    laptopS: '(min-width: 1140px)',
    laptop: '(min-width: 1366px)',
    desktop: '(min-width: 1680px)',
    xxl: '(min-width: 1920px)',
};

module.exports = {
    siteMetadata: {
        title: 'Surfinite',
        titleTemplate: '%s · Surfinite',
        description: 'Работайте в Surfinite браузере без угрозы блокировки',
        url: 'https://www.surfinite.com',
        image: '/static/assets/illustration/main_home.png',
        twitterUsername: '',
        supportedLanguages: ['en', 'ru', 'cn'],
        defaultLanguage: 'en',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-breakpoints',
            options: {
                queries: myCustomQueries,
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@assets': 'static/assets',
                    '@components': 'src/components',
                    '@pages': 'src/pages',
                    '@atoms': 'src/components/atoms',
                    '@molecules': 'src/components/molecules',
                    '@organisms': 'src/components/organisms',
                    '@templates': 'src/components/templates',
                    '@providers': 'src/providers',
                    '@theme': 'src/theme',
                    '@utils': 'src/utils',
                    '@hooks': 'src/hooks',
                    '@i18n': 'i18n',
                    '@src': 'src',
                },
                extensions: ['js', 'jsx', 'ts', 'tsx'],
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                minify: false,
                transpileTemplateLiterals: false,
                pure: true,
            },
        },
        `gatsby-plugin-provide-react`,
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'static/assets/images/favicon.png',
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `png`, `webp`],
                    placeholder: `blurred`,
                    quality: 100,
                    breakpoints: [320, 768, 1140, 1680, 1920],
                    backgroundColor: `transparent`,
                },
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/static/assets/`,
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'fonts',
                path: `${__dirname}/static/assets/fonts/`,
            },
        },
        `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-plugin-minify`,
            options: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                minifyCSS: false,
                minifyJS: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                processConditionalComments: true,
            },
        },
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
            options: {
                devMode: false,
                disable: true,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/i18n`,
                name: `i18n`,
            },
        },
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                localeJsonSourceName: `i18n`, // name given to `gatsby-source-filesystem` plugin.
                languages: ['en', 'ru', 'cn'],
                defaultLanguage: `ru`,
                fallbackLanguage: 'en',
                generateDefaultLanguagePage: true,
                redirect: true,
                // if you are using Helmet, you must include siteUrl, and make sure you add http:https
                siteUrl: `https://surfinite.com`,
                // you can pass any i18next options
                i18nextOptions: {
                    interpolation: {
                        escapeValue: false, // not needed for react as it escapes by default
                    },
                    keySeparator: '.',
                    nsSeparator: false,
                },
            },
        },
    ],
};
