import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import Layout from '@components/templates/Layout';
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import { PageContextProvider } from "@providers/PageContext";
import { ReactElement } from "react";
import PageContainer from "@components/atoms/PageContainer";

const Aura1 = styled.div`
    -webkit-transition: all 0.5s;
    background-color: #8a65df;
    box-shadow: 0px 0px 60px 20px rgba(137, 100, 222, 0.5);
    height: 120%;
    position: absolute;
    right: -340px;
    top: 25px;
    transition: all 0.5s;
    width: 300px;
`;
const Aura2 = styled.div`
    -webkit-transition: all 0.5s;
    background-color: #8b65e4;
    bottom: -301px;
    box-shadow: 0px 0px 60px 10px rgba(131, 95, 214, 0.5), 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    height: 300px;
    position: absolute;
    right: -10%;
    transition: all 0.5s;
    width: 100%;
    z-index: 5;
`;

const ErrorPage = ({ pageContext }: any): ReactElement => {
    const { t } = useTranslation();

    return (
        <PageContextProvider pageContext={pageContext}>
            <Layout hasBurger>
                <PageContainer>
                    <Box position="absolute" width="100%" height="100%" overflow="hidden">
                        <Box position="absolute" width="100%" height={300} top="50%" mt={-150}>
                            <Typography variant="h1" color={{ light: 'light.brandBlack', dark: 'dark.white' }}>
                                {t('error')}
                            </Typography>
                            <Typography
                                variant="subtitle"
                                color={{ light: 'light.brandBlack', dark: 'dark.lightGrey' }}
                                mb={25}
                    >{t('notFound')}</Typography>
                        </Box>
                        <Aura1 />
                        <Aura2 />
                    </Box>
                </PageContainer>
            </Layout>
        </PageContextProvider>
    );
}

export default ErrorPage;

export const query = graphql`
    query ErrorPage($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["404", "update", "legals", "translations"] } }
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
