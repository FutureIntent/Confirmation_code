import { getClampValue } from '@utils/helpers';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

import DownloadDemo from '@components/organisms/DownloadDemo/DownloadDemo';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

const CardNumber = styled.div`
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light ? 'rgb(72 109 255 / 15%)' : 'rgb(87 97 136 / 15%)'};
    border-radius: ${({ theme }) => theme.space['2xs']} 0;
    left: 0;
    padding: 2px 9px;
    position: absolute;

    top: 0;
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
    position: absolute;
    right: 80%;
    top: -38%;
    width: 45%;
    z-index: -1;

    @keyframes float-animation {
        from {
            transform: rotate(0deg) translate(0.5%, 1%) rotate(0deg);
        }
        to {
            transform: rotate(360deg) translate(0.5%, 1%) rotate(-360deg);
        }
    }

    ${mediaQueries.laptop} {
        right: 80%;
        top: -38%;
    }
`;

const query = graphql`
    query {
        howTo1: file(relativePath: { eq: "illustration/howTo1.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        howTo2: file(relativePath: { eq: "illustration/howTo2.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        howTo3: file(relativePath: { eq: "illustration/howTo3.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        howTo4: file(relativePath: { eq: "illustration/howTo4.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        howToCta: file(relativePath: { eq: "illustration/howToCta.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const HowTo = () => {
    const { t } = useTranslation();
    const { howTo1, howTo2, howTo3, howTo4, howToCta } = useStaticQuery(query);

    return (
        <Section id="how-to">
            <GridParent>
                <SquareWrapper>
                    <BackgroundSquare />
                </SquareWrapper>
                <GridChild
                    gridColumn={{
                        _: 'span 12',
                        laptopS: '3/ span 8',
                    }}
                >
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box maxWidth={893}>
                            <Typography
                                data-aos="zoom-in-down"
                                textAlign="center"
                                variant="h2"
                                color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                                mb={8}
                            >
                                {t('howTo.heading')}
                            </Typography>
                            <Typography
                                data-aos="zoom-in-up"
                                data-aos-delay="50"
                                textAlign="center"
                                variant="subtitle"
                                color={{ light: 'light.brandBlack', dark: 'light.mediumGrey' }}
                                mb={60}
                            >
                                {t('howTo.subTitle')}
                            </Typography>
                        </Box>
                    </Box>
                </GridChild>

                <GridChild
                    gridColumn={{
                        _: 'span 12',
                        laptopS: '3/ span 8',
                    }}
                >
                    <Box
                        display="grid"
                        gridTemplateColumns="repeat(auto-fit,minMax(211px, 1fr))"
                        gridGap={30}
                    >
                        <Card data-aos="zoom-out-left" data-aos-delay="50">
                            <GatsbyImage
                                loading="eager"
                                image={howTo1.childImageSharp.gatsbyImageData}
                                alt="Step 1"
                            />
                            <Typography
                                variant="h4"
                                color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }}
                                mt={20}
                            >
                                {t('howTo.step1')}
                            </Typography>
                            <CardNumber>
                                <Typography
                                    variant="accent"
                                    color={{
                                        light: 'light.brandAccent',
                                        dark: 'dark.brandAccentNight',
                                    }}
                                >
                                    1
                                </Typography>
                            </CardNumber>
                        </Card>
                        <Card data-aos="zoom-out-left" data-aos-delay="150">
                            <GatsbyImage
                                loading="eager"
                                image={howTo2.childImageSharp.gatsbyImageData}
                                alt="Step 2"
                            />
                            <Typography
                                variant="h4"
                                color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }}
                                mt={20}
                            >
                                {t('howTo.step2')}
                            </Typography>
                            <CardNumber>
                                <Typography
                                    variant="accent"
                                    color={{
                                        light: 'light.brandAccent',
                                        dark: 'dark.brandAccentNight',
                                    }}
                                >
                                    2
                                </Typography>
                            </CardNumber>
                        </Card>
                        <Card data-aos="zoom-out-left" data-aos-delay="250">
                            <GatsbyImage
                                loading="eager"
                                image={howTo3.childImageSharp.gatsbyImageData}
                                alt="Step 3"
                            />
                            <Typography
                                variant="h4"
                                color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }}
                                mt={20}
                            >
                                {t('howTo.step3')}
                            </Typography>
                            <CardNumber>
                                <Typography
                                    variant="accent"
                                    color={{
                                        light: 'light.brandAccent',
                                        dark: 'dark.brandAccentNight',
                                    }}
                                >
                                    3
                                </Typography>
                            </CardNumber>
                        </Card>
                        <Card data-aos="zoom-out-left" data-aos-delay="350">
                            <GatsbyImage
                                loading="eager"
                                image={howTo4.childImageSharp.gatsbyImageData}
                                alt="Step 4"
                            />
                            <Typography
                                variant="h4"
                                color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }}
                                mt={20}
                            >
                                {t('howTo.step4')}
                            </Typography>
                            <CardNumber>
                                <Typography
                                    variant="accent"
                                    color={{
                                        light: 'light.brandAccent',
                                        dark: 'dark.brandAccentNight',
                                    }}
                                >
                                    4
                                </Typography>
                            </CardNumber>
                        </Card>
                    </Box>
                </GridChild>

                <GridChild
                    gridColumn={{
                        _: 'span 12',
                        laptopS: '3/ span 8',
                    }}
                >
                    <Card variant="grey" mt={40} data-aos="zoom-out" data-aos-delay="150" overflow="unset">
                        <Box display="flex" flexWrap={{ _: 'wrap', tablet: 'nowrap' }}>
                            <Box
                                maxWidth={{ _: '60px', tablet: '140px', laptopS: '100px' }}
                                mr={{ _: 0, tablet: getClampValue('16px', '20px') }}
                            >
                                <GatsbyImage
                                    loading="eager"
                                    image={howToCta.childImageSharp.gatsbyImageData}
                                    alt="Cta"
                                />
                            </Box>
                            <Box
                                display="flex"
                                flexWrap={{ _: 'wrap', laptopS: 'nowrap' }}
                                alignItems={{ _: '', laptopS: 'center' }}
                                width="100%"
                                justifyContent="space-between"
                            >
                                <Box
                                    maxWidth={810}
                                    mb={{ _: '20px', laptopS: '0' }}
                                    mt={{ _: '20px', tablet: 0 }}
                                >
                                    <Typography
                                        variant="paragraph"
                                        color={{ light: 'light.brandBlack', dark: 'commons.white' }}
                                    >
                                        {t('howTo.cta.line1')}
                                        <br />
                                        {t('howTo.cta.line2')}
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <DownloadDemo />
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </GridChild>
            </GridParent>
        </Section>
    );
};

export default HowTo;
