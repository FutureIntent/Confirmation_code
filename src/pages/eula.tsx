import { PageContextProvider } from "@providers/PageContext";
import Layout from "@components/templates/Layout";
import PageContainer from "@components/atoms/PageContainer";
import { graphql } from "gatsby";
import SEO from "@theme/SEO";
import * as React from "react";
import Eula from "@components/molecules/LegalStuff/Eula";

const EulaPage = ({ pageContext }: any) => (
    <PageContextProvider pageContext={pageContext}>
        <Layout hasBurger>
            <PageContainer>
                <SEO title="Surfinite" />
                <Eula />
            </PageContainer>
        </Layout>
    </PageContextProvider>
)

export default EulaPage;

export const query = graphql`
    query EulaPage($language: String!) {
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
