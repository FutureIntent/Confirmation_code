import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import { usePageContext } from '@providers/PageContext';
import { useBreakpoint } from "gatsby-plugin-breakpoints";

interface SEOProps {
    title?: string | null;
    description?: string | null;
    image?: string | null;
}

export const metaData = graphql`
    query metaData {
        site {
            siteMetadata {
                url
                title
                image
                description
                titleTemplate
                supportedLanguages
            }
        }
        mainBanner: file(relativePath: { eq: "illustration/main_home.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const SEO = ({ title = null, description = null, image = null }: SEOProps) => {
    const { pathname } = useLocation();
    const { xxl } = useBreakpoint();
    const { site, mainBanner } = useStaticQuery(metaData);
    const {
        title: defaultTitle,
        titleTemplate,
        description: defaultDescription,
        url: siteUrl,
        image: defaultImage,
        supportedLanguages,
    } = site.siteMetadata;
    const { language, i18n: { originalPath } } = usePageContext();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    };

    const viewport = xxl ? 'width=1920' : 'width=device-width, initial-scale=1, shrink-to-fit=no';

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate} htmlAttributes={{ lang: language }}>

            <meta name="viewport" content={viewport} />
            <meta name="description" content={seo.description} />
            <meta
                name="image"
                content={mainBanner.childImageSharp.gatsbyImageData.images.fallback.src}
            />

            {seo.url && <meta property="og:url" content={seo.url} />}

            <meta property="og:type" content="website" />

            {seo.title && <meta property="og:title" content={seo.title} />}

            {seo.description && <meta property="og:description" content={seo.description} />}

            <meta property="og:locale" content={language} />

            <meta
                property="og:image"
                content={mainBanner.childImageSharp.gatsbyImageData.images.fallback.src}
            />

            <meta name="twitter:card" content="summary_large_image" />

            {seo.title && <meta name="twitter:title" content={seo.title} />}

            {seo.description && <meta name="twitter:description" content={seo.description} />}

            <meta
                name="twitter:image"
                content={mainBanner.childImageSharp.gatsbyImageData.images.fallback.src}
            />

            <link rel="canonical" href={`${siteUrl}/${language}${originalPath}`} />
            <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${originalPath}`} />

            {supportedLanguages.map((supportedLanguage: string) => (
                <link
                    key={supportedLanguage}
                    rel="alternate"
                    hrefLang={supportedLanguage === 'cn' ? 'zh' : supportedLanguage}
                    href={`${siteUrl}/${supportedLanguage}${originalPath}`}
                />
            ))}
        </Helmet>
    );
};

export default SEO;
