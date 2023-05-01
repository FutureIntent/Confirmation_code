import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

import DownloadDemo from '@components/organisms/DownloadDemo/DownloadDemo';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

const ContrastWrapper = styled.div<SpaceProps>`
    align-items: center;
    background: ${({ theme }) =>
        theme.mode === ColorMode.light
            ? 'linear-gradient(107.6deg, #050D2D 0%, #202846 99.8%);'
            : theme.colors.dark.black};
    border-radius: 40px;
    display: flex;
    justify-content: center;
    ${space}
`;

const CardTag = styled.div`
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light ? 'rgb(72 109 255 / 15%)' : 'rgb(26 32 56 / 15%)'};
    border-radius: ${({ theme }) => theme.space['2xs']} 0;
    left: 0;
    padding: 2px 9px;
    position: absolute;

    top: 0;
`;

const query = graphql`
    query {
        before: file(relativePath: { eq: "illustration/before.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        after: file(relativePath: { eq: "illustration/after.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        organize: file(relativePath: { eq: "illustration/organize.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const BeforeAndAfter = () => {
    const { t } = useTranslation();
    const { before, after, organize } = useStaticQuery(query);

    return (
        <Section id="before-and-after">
            <>
                <ContrastWrapper
                    data-aos="fade-in"
                    p={{
                        _: '20px 20px 220px',
                        tablet: '60px 60px 240px',
                        laptopS: '80px 90px 325px',
                        desktop: '80px 90px 225px',
                    }}
                >
                    <GridParent>
                        <GridChild
                            gridColumn={{
                                _: 'span 12',
                                tablet: '2/ span 10',
                                desktop: '3/ span 8',
                            }}
                        >
                            <Typography
                                data-aos="fade-down"
                                data-aos-delay="100"
                                variant="h2"
                                color={{ light: 'commons.white', dark: 'dark.white' }}
                                textAlign="center"
                                mb={17}
                            >
                                {t('beforeAndAfter.heading')}
                            </Typography>
                            <Typography
                                data-aos="fade-down"
                                data-aos-delay="120"
                                variant="paragraph"
                                color={{ light: 'commons.white', dark: 'dark.lightGrey' }}
                                textAlign="center"
                                mb={40}
                            >
                                {t('beforeAndAfter.subTitle')}
                            </Typography>
                        </GridChild>
                        <GridChild
                            display="grid"
                            gridColumn={{
                                _: 'span 12',
                                tablet: '2/ span 10',
                                desktop: '3/ span 8',
                            }}
                            gridGap={30}
                            gridTemplateColumns="repeat(auto-fit,minMax(250px, 1fr))"
                        >
                            <Card
                                data-aos="fade-up"
                                data-aos-delay="300"
                                cardSize="small"
                                variant="dark"
                                p={{
                                    _: '60px 15px 40px',
                                    tablet: '50px 40px',
                                    laptopS: '50px 25px',
                                    desktop: '50px 40px',
                                }}
                            >
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    height="100%"
                                >
                                    <GatsbyImage
                                        loading="eager"
                                        style={{ height: '100%' }}
                                        image={before.childImageSharp.gatsbyImageData}
                                        alt={t('beforeAndAfter.before')}
                                    />
                                    <Typography
                                        variant="caption"
                                        color={{
                                            light: 'light.mediumGrey',
                                            dark: 'dark.lightGrey',
                                        }}
                                        mt={44}
                                    >
                                        {t('beforeAndAfter.beforeText')}
                                    </Typography>
                                </Box>
                                <CardTag>
                                    <Typography
                                        variant="h4"
                                        color={{
                                            light: 'light.brandAccent',
                                            dark: 'light.brandAccent',
                                        }}
                                    >
                                        {t('beforeAndAfter.before')}
                                    </Typography>
                                </CardTag>
                            </Card>

                            <Card
                                data-aos="fade-up"
                                data-aos-delay="450"
                                cardSize="small"
                                variant="dark"
                                p={{
                                    _: '60px 15px 40px',
                                    tablet: '50px 40px',
                                    laptopS: '50px 25px',
                                    desktop: '50px 40px',
                                }}
                            >
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    height="100%"
                                >
                                    <GatsbyImage
                                        loading="eager"
                                        style={{ height: '100%' }}
                                        image={after.childImageSharp.gatsbyImageData}
                                        alt={t('beforeAndAfter.after')}
                                    />
                                    <Typography
                                        variant="caption"
                                        color={{
                                            light: 'light.mediumGrey',
                                            dark: 'dark.lightGrey',
                                        }}
                                        mt={44}
                                    >
                                        {t('beforeAndAfter.afterText')}
                                    </Typography>
                                </Box>
                                <CardTag>
                                    <Typography
                                        variant="h4"
                                        color={{
                                            light: 'light.brandAccent',
                                            dark: 'light.brandAccent',
                                        }}
                                    >
                                        {t('beforeAndAfter.after')}
                                    </Typography>
                                </CardTag>
                            </Card>
                        </GridChild>
                    </GridParent>
                </ContrastWrapper>
                <GridParent>
                    <GridChild gridColumn="2/ span 10" mt={-120}>
                        <Box display="flex" justifyContent="center" width="100%">
                            <Card data-aos="fade-right" data-aos-delay="50" p="40px 35px 50px" overflow="unset">
                                <Box display="flex" flexDirection={{ _: 'column', tablet: 'row' }} zIndex={999}>
                                    <Box
                                        maxHeight={195}
                                        maxWidth={302}
                                        order={{ _: 1, tablet: 2 }}
                                        mb={{ _: '26px', tablet: 0 }}
                                        ml={{ _: 0, tablet: '20px' }}
                                    >
                                        <GatsbyImage
                                            loading="eager"
                                            image={organize.childImageSharp.gatsbyImageData}
                                            alt="Organize"
                                        />
                                    </Box>
                                    <Box maxWidth={460} order={{ _: 2, tablet: 1 }}>
                                        <Typography
                                            variant="h3"
                                            color={{
                                                light: 'light.brandBlack',
                                                dark: 'dark.white',
                                            }}
                                            mb={13}
                                        >
                                            {t('beforeAndAfter.cta.heading')}
                                        </Typography>
                                        <Typography
                                            variant="paragraph"
                                            color={{
                                                light: 'light.brandBlack',
                                                dark: 'commons.white',
                                            }}
                                            mb={20}
                                        >
                                            {t('beforeAndAfter.cta.subTitle')}
                                        </Typography>
                                        <Box display="flex" alignItems="center">
                                            <DownloadDemo />
                                        </Box>
                                    </Box>
                                </Box>
                            </Card>
                        </Box>
                    </GridChild>
                </GridParent>
            </>
        </Section>
    );
};

export default BeforeAndAfter;
