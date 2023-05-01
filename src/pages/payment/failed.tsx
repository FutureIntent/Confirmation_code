import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import Layout from '@components/templates/Layout';
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import { PageContextProvider } from "@providers/PageContext";
import { ReactElement } from "react";
import PageContainer from "@components/atoms/PageContainer";
import { GatsbyImage } from "gatsby-plugin-image";
import { useColorMode } from "@hooks";
import { ColorMode } from "@providers/ColorModeProvider/ColorModeContext";

const Image = ({ image, alt }: any) => {
    const { colorMode } = useColorMode();
    const { light, dark } = image;
    const isLight = colorMode === ColorMode.light;

    if(isLight) {
        return (
            <GatsbyImage
                key={light.childImageSharp.gatsbyImageData.images.fallback.src}
                image={light.childImageSharp.gatsbyImageData}
                alt={alt}
                />
        )
    }

    return (
        <GatsbyImage
            key={dark.childImageSharp.gatsbyImageData.images.fallback.src}
            image={dark.childImageSharp.gatsbyImageData}
            alt={alt}
                />
    )
}

const FailedPayment = ({ pageContext, data }: any): ReactElement => {
    const { t } = useTranslation();

    return (
        <PageContextProvider pageContext={pageContext}>
            <Layout hasBurger>
                <PageContainer>
                    <Box mt={45} mb="90px" display="flex" justifyContent="center" alignItems={{ _: "center", tablet: 'unset'}} gridGap={{ _: "30px", laptopS: '120px'}} flexDirection={{ _: 'column', tablet: "row"}}>
                        <Image image={data} alt="Payment canceled" />
                        <Box display="flex" justifyContent="center" flexDirection="column" maxWidth={435}>
                            <Typography variant="h2" color={{ light: 'light.caution', dark: 'dark.cautionNight' }} mb={10}>
                                {t('failedPayment')}
                            </Typography>
                            <Typography variant="subtitle" color={{ light: 'light.brandBlack', dark: 'dark.white' }} mb={10}>
                                {t('notCompleted')}
                            </Typography>
                            <Typography variant="paragraph" color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }}>
                                {t('checkCard')}
                            </Typography>
                        </Box>
                    </Box>
                </PageContainer>
            </Layout>
        </PageContextProvider>
    );
}

export default FailedPayment;

export const query = graphql`
    query FailedPayment($language: String!) {
        locales: allLocale(
            filter: { language: { eq: $language }, ns: { in: ["translations", "update", "payments", "legals"] } }
        ) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        },
        light: file(relativePath: { eq: "illustration/payment/failed.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        },
        dark: file(relativePath: { eq: "illustration/payment/failed_dark.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;
