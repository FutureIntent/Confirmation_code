import { useTranslation } from "react-i18next";
import { graphql, useStaticQuery } from "gatsby";
import GridChild from "@components/templates/GridChild";
import Box from "@components/atoms/Box";
import { GatsbyImage } from "gatsby-plugin-image";
import Typography from "@components/atoms/Typography";
import GridParent from "@components/templates/GridParent";
import Button from "@components/atoms/Button/Button";

const query = graphql`
    query {
        banner: file(relativePath: { eq: "illustration/main_home.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const EnjoyOurProduct = () => {
    const { t } = useTranslation();
    const { banner } = useStaticQuery(query);

    return (
        <GridParent>
            <GridChild gridColumn={{ _: "1/ span 12", laptopS: "4/ span 6"}}>
                <Box
                    display="flex"
                    flexDirection={{ _: 'column', tablet: 'row' }}
                    gridGap={30}
                    alignItems={{ _: undefined, tablet: "center" }}
                    justifyContent={{ _: "center", tablet: undefined }}
                    mb={120}
                >
                    <Box maxWidth={{ _: undefined, tablet: 402, laptopS: 590}} order={{ _: 2, tablet: 1 }}>
                        <Typography variant="h2" color={{ light: 'commons.brandBlack', dark: 'dark.white' }}>{t('enjoy')}</Typography>
                        <Typography variant="subtitle" color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }} mt={20}>{t('beforeYouStart')}</Typography>
                        <Button display="block" as="a" href="https://docs.surfinite.com/" target="_blank" rel="noreferrer" mt={20}>{t('docs')}</Button>
                    </Box>
                    <Box position="relative" maxWidth={432} mr={{ _: 145, tablet: 'unset' }} order={{ _: 1, tablet: 2 }}>
                        <GatsbyImage alt="Banner" image={banner.childImageSharp.gatsbyImageData} />
                    </Box>
                </Box>
            </GridChild>
        </GridParent>
    )
}

export default EnjoyOurProduct;
