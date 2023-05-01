import { PageContextProvider } from "@providers/PageContext";
import Layout from "@components/templates/Layout";
import PageContainer from "@components/atoms/PageContainer";
import { graphql } from "gatsby";
import SEO from "@theme/SEO";
import * as React from "react";
import PrivacyPolicy from "@components/molecules/LegalStuff/PrivacyPolicy";

const PrivacyPolicyPage = ({ pageContext }: any) => (
    <PageContextProvider pageContext={pageContext}>
        <Layout hasBurger>
            <PageContainer>
                <SEO title="Surfinite" />
                <PrivacyPolicy />
            </PageContainer>
        </Layout>
    </PageContextProvider>
    )

export default PrivacyPolicyPage;

export const query = graphql`
    query PrivacyPolicyPage($language: String!) {
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
