import { PageContextProvider } from "@providers/PageContext";
import Layout from "@components/templates/Layout";
import PageContainer from "@components/atoms/PageContainer";
import { graphql } from "gatsby";
import SEO from "@theme/SEO";
import * as React from "react";
import TermsOfUse from "@components/molecules/LegalStuff/TermsOfUse";

const TermsOfUsePage = ({ pageContext }: any) => (
    <PageContextProvider pageContext={pageContext}>
        <Layout hasBurger>
            <PageContainer>
                <SEO title="Surfinite" />
                <TermsOfUse />
            </PageContainer>
        </Layout>
    </PageContextProvider>
)

export default TermsOfUsePage;

export const query = graphql`
    query TermsOfUsePage($language: String!) {
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
