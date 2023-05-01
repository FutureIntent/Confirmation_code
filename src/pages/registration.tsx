import RegistrationBlock from '@components/sections/RegistrationBlock';

import Layout from '@components/templates/Layout';
import { graphql } from "gatsby";
import { ReactElement } from "react";
import { PageContextProvider } from "@providers/PageContext";
import PageContainer from "@components/atoms/PageContainer";

const Registration = ({ pageContext }: any): ReactElement => (
    <PageContextProvider pageContext={pageContext}>
        <Layout hasBurger>
            <PageContainer>
                <RegistrationBlock />
            </PageContainer>
        </Layout>
    </PageContextProvider>
);

export default Registration;

export const query = graphql`
    query RegistrationPage($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["translations", "update", "legals", "registration"] } }
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
