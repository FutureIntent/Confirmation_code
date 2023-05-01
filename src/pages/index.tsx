import BeforeAndAfter from '@components/sections/BeforeAndAfter';
import EarnWithoutBarriers from '@components/sections/EarnWithoutBarriers';
import Faq from '@components/sections/Faq';
import HeroBanner from '@components/sections/HeroBanner';
import HideFingerprint from '@components/sections/HideFingerprint';
import HowTo from '@components/sections/HowTo';
import OurPros from '@components/sections/OurPros';
import Prices from '@components/sections/Prices';
// import Reviews from '@components/sections/Reviews';

import * as React from 'react';

import SEO from '@theme/SEO';

import Layout from '@components/templates/Layout';
import { graphql } from "gatsby";
import { ReactElement } from "react";
import { PageContextProvider } from "@providers/PageContext";
import PageContainer from "@components/atoms/PageContainer";

const IndexPage = ({ pageContext }: any): ReactElement => (
    <PageContextProvider pageContext={pageContext}>
        <Layout hasBurger>
            <PageContainer>
                <SEO title="Surfinite" />
                <HeroBanner />
                <HowTo />

                <EarnWithoutBarriers />
                <HideFingerprint />
                <BeforeAndAfter />

                {/* <LazyLoad options={options}> */}
                {/*    <VirtualAccounts /> */}
                {/* </LazyLoad> */}

                <OurPros />
                <Prices />
                <Faq />

                {/* <Reviews /> */}
            </PageContainer>
        </Layout>
    </PageContextProvider>
    )

export default IndexPage;

export const query = graphql`
    query HomePage($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["translations", "trialdays", "update", "legals"] } }
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
