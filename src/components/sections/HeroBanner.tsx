import { getClampValue } from '@utils/helpers';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import LinkAsButton from '@components/atoms/LinkAsButton/LinkAsButton';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

const CardContentGrid = styled.div`
    display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 20px;
    grid-template-columns: repeat(auto-fit, minMax(240px, 1fr));
    justify-content: space-between;
`;

const BackgroundSquare = styled.div`
    background: linear-gradient(180deg, #005bed 0%, #7837ea 100%);
    border-radius: 155px;
    opacity: 0.05;
    padding: 50px;
    transform: rotate(60deg);
    width: 100%;

    &:after {
        aspect-ratio: 1 / 1;
        border: 2px solid #5e58f3;
        border-radius: 210px;
        content: '';
        display: block;
        margin: -100px;
    }
`;

const SquareWrapper = styled.div`
    animation: float-animation 4s alternate ease-in-out infinite;
    aspect-ratio: 1 / 1;
    bottom: 5%;
    left: 37%;
    position: absolute;
    width: 150%;

    @keyframes float-animation {
        from {
            transform: rotate(0deg) translate(0.5%, 1%) rotate(0deg);
        }
        to {
            transform: rotate(360deg) translate(0.5%, 1%) rotate(-360deg);
        }
    }

    z-index: -1;

    ${mediaQueries.desktop} {
        bottom: -25%;
        left: 60%;
    }
`;

const query = graphql`
    query {
        mainBanner: file(relativePath: { eq: "illustration/main_home.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        anonymous: file(relativePath: { eq: "illustration/anonymous.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        fingerprint: file(relativePath: { eq: "illustration/fingerprint.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        settings: file(relativePath: { eq: "illustration/settings.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        roles: file(relativePath: { eq: "illustration/roles.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const HeroBanner = () => {
    const { t } = useTranslation();
    const { mainBanner, anonymous, fingerprint, settings, roles } = useStaticQuery(query);

    return (
        <Section>
            <GridParent gridGap={12}>
                <GridChild
                    gridRow={{ _: 2, tablet: 1 }}
                    gridColumn={{
                        _: 'span 12',
                        tablet: 'span 6',
                        tabletL: 'span 7',
                        laptopS: '2/ span 4',
                    }}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        height="100%"
                    >
                        <Typography
                            variant="h1"
                            color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                            mb={13}
                        >
                            {t('homeBanner.heading')}
                        </Typography>
                        <Typography
                            variant="subtitle"
                            color={{ light: 'light.brandBlack', dark: 'dark.lightGrey' }}
                            mb={25}
                        >
                            {t('homeBanner.subTitle')}
                        </Typography>
                        <div>
                            <LinkAsButton to="/registration">
                                <Typography variant="accent" color="commons.white">
                                    {t('homeBanner.button')}
                                </Typography>
                            </LinkAsButton>
                        </div>
                    </Box>
                </GridChild>
                <GridChild
                    gridRow={1}
                    gridColumn={{
                        _: 'span 12',
                        tablet: 'span 6',
                        tabletL: 'span 5',
                        laptopS: '6/ span 6',
                    }}
                >
                    <Box
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="center"
                        data-sal="slide-right"
                        position="relative"
                    >
                        <SquareWrapper>
                            <BackgroundSquare />
                        </SquareWrapper>
                        <GatsbyImage
                            loading="eager"
                            style={{ height: '100%' }}
                            image={mainBanner.childImageSharp.gatsbyImageData}
                            alt="Main banner"
                        />
                    </Box>
                </GridChild>

                <GridChild gridColumn={{ _: 'span 12', laptopS: '2/ span 10' }}>
                    <Card cardSize="big" p={getClampValue('25px', '60px')} mt={50}>
                        <CardContentGrid>
                            <Box maxWidth={294} display="flex" alignItems="center">
                                <Box flexShrink={0} maxWidth={93}>
                                    <GatsbyImage
                                        loading="eager"
                                        style={{ height: '100%' }}
                                        image={anonymous.childImageSharp.gatsbyImageData}
                                        alt="Main banner"
                                    />
                                </Box>
                                <Typography
                                    ml={12}
                                    variant="accent"
                                    color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }}
                                >
                                    {t('homeBanner.anon')}
                                </Typography>
                            </Box>
                            <Box maxWidth={294} display="flex" alignItems="center">
                                <Box flexShrink={0} maxWidth={76}>
                                    <GatsbyImage
                                        loading="eager"
                                        style={{ height: '100%' }}
                                        image={fingerprint.childImageSharp.gatsbyImageData}
                                        alt="Main banner"
                                    />
                                </Box>
                                <Typography
                                    ml={12}
                                    variant="accent"
                                    color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }}
                                >
                                    {t('homeBanner.twoClicks')}
                                </Typography>
                            </Box>
                            <Box maxWidth={294} display="flex" alignItems="center">
                                <Box flexShrink={0} maxWidth={62}>
                                    <GatsbyImage
                                        loading="eager"
                                        style={{ height: '100%' }}
                                        image={settings.childImageSharp.gatsbyImageData}
                                        alt="Main banner"
                                    />
                                </Box>
                                <Typography
                                    ml={12}
                                    variant="accent"
                                    color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }}
                                >
                                    {t('homeBanner.wideSettings')}
                                </Typography>
                            </Box>
                            <Box maxWidth={294} display="flex" alignItems="center">
                                <Box flexShrink={0} maxWidth={64}>
                                    <GatsbyImage
                                        loading="eager"
                                        style={{ height: '100%' }}
                                        image={roles.childImageSharp.gatsbyImageData}
                                        alt="Main banner"
                                    />
                                </Box>
                                <Typography
                                    ml={12}
                                    variant="accent"
                                    color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }}
                                >
                                    {t('homeBanner.roles')}
                                </Typography>
                            </Box>
                        </CardContentGrid>
                    </Card>
                </GridChild>
            </GridParent>
        </Section>
    );
};

export default HeroBanner;
