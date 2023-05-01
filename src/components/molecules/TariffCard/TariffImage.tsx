import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ReactElement } from 'react';

import Box from '@components/atoms/Box';

const query = graphql`
    query {
        tariffFree: file(relativePath: { eq: "illustration/tariffFree.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        tariffStarter: file(relativePath: { eq: "illustration/tariffStarter.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        tariffAdvanced: file(relativePath: { eq: "illustration/tariffAdvanced.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        tariffUltimate: file(relativePath: { eq: "illustration/tariffUltimate.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const TariffImage = ({ tariff }: { tariff: string }): ReactElement => {
    const { tariffFree, tariffStarter, tariffAdvanced, tariffUltimate } = useStaticQuery(query);

    switch (true) {
        case tariff === 'mini':
            return (
                <Box mb={20} maxWidth={97}>
                    <GatsbyImage
                        loading="eager"
                        image={tariffFree.childImageSharp.gatsbyImageData}
                        alt="Tariff 'Free'"
                    />
                </Box>
            );
        case tariff === 'starter':
            return (
                <Box mb={20} maxWidth={116}>
                    <GatsbyImage
                        loading="eager"
                        image={tariffStarter.childImageSharp.gatsbyImageData}
                        alt="Tariff 'Starter'"
                    />
                </Box>
            );
        case tariff === 'advanced':
            return (
                <Box mb={20} maxWidth={132}>
                    <GatsbyImage
                        loading="eager"
                        image={tariffAdvanced.childImageSharp.gatsbyImageData}
                        alt="Tariff 'Advanced'"
                    />
                </Box>
            );
        case tariff === 'ultimate':
            return (
                <Box mb={20} maxWidth={171}>
                    <GatsbyImage
                        loading="eager"
                        image={tariffUltimate.childImageSharp.gatsbyImageData}
                        alt="Tariff 'Ultimate'"
                    />
                </Box>
            );
        default:
            return <></>;
    }
};

export default TariffImage;
