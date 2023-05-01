import { PageContextProvider } from "@providers/PageContext";
import Layout from "@components/templates/Layout";
import PageContainer from "@components/atoms/PageContainer";
import { graphql } from "gatsby";
import SEO from "@theme/SEO";
import * as React from "react";
import CookiePolicy from "@components/molecules/LegalStuff/CookiePolicy";

const CookiePolicyPage = ({ pageContext }: any) => (
    <PageContextProvider pageContext={pageContext}>
        <Layout hasBurger>
            <PageContainer>
                <SEO title="Surfinite" />
                <CookiePolicy />
            </PageContainer>
        </Layout>
    </PageContextProvider>
)

export default CookiePolicyPage;

export const query = graphql`
    query CookiePolicyPage($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["translations", "trialdays", "legals", "update"] } }
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
