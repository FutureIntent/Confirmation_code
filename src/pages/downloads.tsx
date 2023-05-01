import DownloadBlock from '@components/sections/DownloadPageSections/DownloadBlock';
import DownloadSuccess from '@components/sections/DownloadPageSections/DownloadSuccess';
import HeroBanner from '@components/sections/DownloadPageSections/HeroBanner';
import HeroBannerSuccess from '@components/sections/DownloadPageSections/Success/HeroBanner';
import WhatsNew from '@components/sections/DownloadPageSections/WhatsNew';
import { useLocation } from '@reach/router';
import { graphql } from 'gatsby';
import { ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PageContextProvider } from '@providers/PageContext';

import SEO from '@theme/SEO';

import Box from '@components/atoms/Box';
import PageContainer from '@components/atoms/PageContainer';

import { ISupportedPlatformOS } from '@components/organisms/DownloadDemo/DownloadDemo';

import Layout from '@components/templates/Layout';

const DownloadsPage = ({ pageContext }: any): ReactElement => {
    const { t } = useTranslation();
    const { search } = useLocation();
    const searchParamEmail = new URLSearchParams(search).get('success_os') as ISupportedPlatformOS;
    const [platform, setPlatform] = useState<ISupportedPlatformOS | null>(searchParamEmail || null);

    return (
        <PageContextProvider pageContext={pageContext}>
            <Box backgroundColor={{ light: 'light.grey', dark: 'dark.eclipseDark' }}>
                <Layout hasBurger>
                    <SEO title={t('downloadSurfinite')} />
                    {platform ? <HeroBannerSuccess platform={platform} /> : <HeroBanner />}
                    <PageContainer onlyX>
                        {!platform ? (
                            <>
                                <DownloadBlock setPlatform={setPlatform} />
                                <WhatsNew />
                            </>
                        ) : (
                            <DownloadSuccess platform={platform} />
                        )}
                    </PageContainer>
                </Layout>
            </Box>
        </PageContextProvider>
    );
};

export default DownloadsPage;

export const query = graphql`
    query DownloadsPage($language: String!) {
        locales: allLocale(
            filter: {
                language: { eq: $language }
                ns: { in: ["translations", "downloads", "update", "legals"] }
            }
        ) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;
