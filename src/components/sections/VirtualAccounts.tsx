import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

const query = graphql`
    query {
        commercialWeb: file(relativePath: { eq: "illustration/commercialWeb.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        bookmakers: file(relativePath: { eq: "illustration/bookmakers.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        sellingPlatforms: file(relativePath: { eq: "illustration/sellingPlatforms.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        onlineGames: file(relativePath: { eq: "illustration/onlineGames.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const VirtualAccounts = () => {
    const { t } = useTranslation();
    const { commercialWeb, bookmakers, sellingPlatforms, onlineGames } = useStaticQuery(query);

    return (
        <Section id="virtual-accounts">
            <GridParent>
                <GridChild
                    gridColumn={{
                        _: 'span 12',
                        laptopS: '4/ span 6',
                    }}
                >
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box maxWidth={893}>
                            <Typography
                                data-aos="fade-up"
                                textAlign="center"
                                variant="h2"
                                color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                                mb={8}
                            >
                                {t('virtualAccounts.heading')}
                            </Typography>
                            <Typography
                                data-aos="fade-up"
                                data-aos-delay="150"
                                textAlign="center"
                                variant="subtitle"
                                color={{ light: 'light.brandBlack', dark: 'light.mediumGrey' }}
                                mb={60}
                            >
                                {t('virtualAccounts.subTitle')}
                            </Typography>
                        </Box>
                    </Box>
                </GridChild>

                <GridChild
                    gridColumn={{
                        _: 'span 12',
                        laptopS: '4/ span 6',
                    }}
                >
                    <Box
                        display="grid"
                        justifyContent="center"
                        gridTemplateColumns={{
                            _: 'repeat(auto-fit,minMax(270px, 430px))',
                            tablet: 'repeat(2,minMax(270px, 1fr))',
                        }}
                        gridGap={30}
                    >
                        <Card data-aos="fade-right" data-aos-delay="50" p={0}>
                            <GatsbyImage
                                loading="eager"
                                image={commercialWeb.childImageSharp.gatsbyImageData}
                                alt={t('beforeAndAfter.before')}
                            />
                            <Box p="10px 25px 30px">
                                <Typography
                                    variant="h4"
                                    color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                                    mt={10}
                                >
                                    {t('virtualAccounts.card1.title')}
                                </Typography>
                                <Typography
                                    variant="paragraph"
                                    color={{ light: 'light.brandBlack', dark: 'dark.lightGrey' }}
                                    mt={10}
                                >
                                    {t('virtualAccounts.card1.text')}
                                </Typography>
                            </Box>
                        </Card>

                        <Card data-aos="fade-left" data-aos-delay="150" p={0}>
                            <GatsbyImage
                                loading="eager"
                                image={bookmakers.childImageSharp.gatsbyImageData}
                                alt={t('beforeAndAfter.before')}
                            />
                            <Box p="10px 25px 30px">
                                <Typography
                                    variant="h4"
                                    color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                                    mt={10}
                                >
                                    {t('virtualAccounts.card2.title')}
                                </Typography>
                                <Typography
                                    variant="paragraph"
                                    color={{ light: 'light.brandBlack', dark: 'dark.lightGrey' }}
                                    mt={10}
                                >
                                    {t('virtualAccounts.card2.text')}
                                </Typography>
                            </Box>
                        </Card>

                        <Card data-aos="fade-right" data-aos-delay="250" p={0}>
                            <GatsbyImage
                                loading="eager"
                                image={sellingPlatforms.childImageSharp.gatsbyImageData}
                                alt={t('beforeAndAfter.before')}
                            />
                            <Box p="10px 25px 30px">
                                <Typography
                                    variant="h4"
                                    color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                                    mt={10}
                                >
                                    {t('virtualAccounts.card3.title')}
                                </Typography>
                                <Typography
                                    variant="paragraph"
                                    color={{ light: 'light.brandBlack', dark: 'dark.lightGrey' }}
                                    mt={10}
                                >
                                    {t('virtualAccounts.card3.text')}
                                </Typography>
                            </Box>
                        </Card>

                        <Card data-aos="fade-left" data-aos-delay="350" p={0}>
                            <GatsbyImage
                                loading="eager"
                                image={onlineGames.childImageSharp.gatsbyImageData}
                                alt={t('beforeAndAfter.before')}
                            />
                            <Box p="10px 25px 30px">
                                <Typography
                                    variant="h4"
                                    color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                                    mt={10}
                                >
                                    {t('virtualAccounts.card4.title')}
                                </Typography>
                                <Typography
                                    variant="paragraph"
                                    color={{ light: 'light.brandBlack', dark: 'dark.lightGrey' }}
                                    mt={10}
                                >
                                    {t('virtualAccounts.card4.text')}
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                </GridChild>
            </GridParent>
        </Section>
    );
};

export default VirtualAccounts;
