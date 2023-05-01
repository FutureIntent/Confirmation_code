import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Slider from "@components/molecules/Slider";
import { useLayoutEffect, useState } from "react";

import ArrowUp from "@components/molecules/Icons/ArrowUp";
import ExternalLinkWrapper from "@components/atoms/ExternalLinkWrapper";
import { FONT_BOLD } from "@components/atoms/Typography/Typography";

const query = graphql`
    query {
        escapeVerification: file(relativePath: { eq: "illustration/escapeVerification.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        teamWork: file(relativePath: { eq: "illustration/teamWork.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        dataSync: file(relativePath: { eq: "illustration/dataSync.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        checkAdv: file(relativePath: { eq: "illustration/groups.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        priceCompare: file(relativePath: { eq: "illustration/categories.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        browserAutomation: file(relativePath: { eq: "illustration/browserAutomation.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const OurPros = () => {
    const { t } = useTranslation();
    const [isMounted , setIsMounted] = useState(false);
    const { escapeVerification, teamWork, dataSync, checkAdv, priceCompare, browserAutomation } =
        useStaticQuery(query);
    const { tablet } = useBreakpoint();

    const cardsData = [
        {
            poster: (
                <GatsbyImage
                    loading="eager"
                    image={escapeVerification.childImageSharp.gatsbyImageData}
                    alt={t('ourPros.card1.title')}
                />
            ),
            title: t('ourPros.card1.title'),
            description: t('ourPros.card1.subTitle'),
        },
        {
            poster: (
                <GatsbyImage
                    loading="eager"
                    image={teamWork.childImageSharp.gatsbyImageData}
                    alt={t('ourPros.card2.title')}
                />
            ),
            title: t('ourPros.card2.title'),
            description: t('ourPros.card2.subTitle'),
        },
        {
            poster: (
                <GatsbyImage
                    loading="eager"
                    image={dataSync.childImageSharp.gatsbyImageData}
                    alt={t('ourPros.card3.title')}
                />
            ),
            title: t('ourPros.card3.title'),
            description: t('ourPros.card3.subTitle'),
        },
        {
            poster: (
                <GatsbyImage
                    loading="eager"
                    image={checkAdv.childImageSharp.gatsbyImageData}
                    alt={t('ourPros.card4.title')}
                />
            ),
            title: t('ourPros.card4.title'),
            description: t('ourPros.card4.subTitle'),
        },
        {
            poster: (
                <GatsbyImage
                    loading="eager"
                    image={priceCompare.childImageSharp.gatsbyImageData}
                    alt={t('ourPros.card5.title')}
                />
            ),
            title: t('ourPros.card5.title'),
            description: t('ourPros.card5.subTitle'),
        },
        {
            poster: (
                <GatsbyImage
                    loading="eager"
                    image={browserAutomation.childImageSharp.gatsbyImageData}
                    alt={t('ourPros.card6.title')}
                />
            ),
            title: t('ourPros.card6.title'),
            description: `${t('ourPros.card6.subTitle')}`,
            apiDocs: `${t('ourPros.card6.apiDocs')}`
        },
    ];

    useLayoutEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) return null

    return (
        <Section id="our-pros">
            <GridParent>
                <GridChild gridColumn={{ _: 'span 12', desktop: '4/ span 6' }}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box maxWidth={636}>
                            <Typography
                                data-aos="fade-down"
                                textAlign="center"
                                variant="h2"
                                color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                                mb={8}
                            >
                                {t('ourPros.heading')}
                            </Typography>
                            <Typography
                                data-aos="fade-down"
                                data-aos-delay="100"
                                textAlign="center"
                                variant="paragraph"
                                color={{ light: 'light.brandBlack', dark: 'light.mediumGrey' }}
                                mb={60}
                            >
                                {t('ourPros.subTitle')}
                            </Typography>
                        </Box>
                    </Box>
                </GridChild>

                <GridChild gridColumn="span 12">
                    <Box
                        display={{ _: 'flex', tablet: 'grid' }}
                        gridTemplateColumns={{
                            _: '',
                            tablet: 'repeat(auto-fit, minMax(265px, 1fr))',
                            laptopS: 'repeat(auto-fill, minMax(465px, 1fr))',
                        }}
                        justifyContent="center"
                        gridGap={{ _: 15, tablet: 30 }}
                        flexWrap={{ _: 'wrap', tablet: 'unset' }}
                        overflow="visible"
                    >
                        {tablet ? cardsData.map((card, index) => (
                            <Card
                                key={card.title}
                                minWidth={265}
                                data-aos="zoom-in"
                                data-aos-delay={100 * (index + 1)}
                            >
                                <Box display="flex" flexWrap={{ _: 'wrap', laptopS: 'nowrap' }}>
                                    <Box
                                        maxWidth={220}
                                        mr={{ _: 0, laptopS: 20 }}
                                        mb={{ _: 20, laptopS: 0 }}
                                    >
                                        {card.poster}
                                    </Box>
                                    <Box width="fit-content">
                                        <Typography
                                            variant="h3"
                                            color={{
                                                light: 'light.brandBlack',
                                                dark: 'dark.white',
                                            }}
                                            mb={8}
                                        >
                                            {card.title}
                                        </Typography>
                                        <Typography
                                            as="div"
                                            variant="paragraph"
                                            color={{
                                                light: 'light.brandBlack',
                                                dark: 'commons.white',
                                            }}
                                            mb={60}
                                        >
                                            {card.description}
                                            {card.apiDocs && (
                                            <a href="https://docs.surfinite.com/" target="_blank" rel="noreferrer">
                                                <ExternalLinkWrapper mt="0.5rem">
                                                    <Typography fontWeight={FONT_BOLD} mr="0.5rem" variant="paragraph" color={{ light: "light.brandAccent", dark: "dark.brandAccentNight" }}>{card.apiDocs}</Typography>
                                                    <ArrowUp size="medium" />
                                                </ExternalLinkWrapper>
                                            </a>
                                            )}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                        )) : (
                            <Slider spaceBetween={20} slidesPerView="auto" showOverflow shouldShrink>
                                {cardsData.map((card, index) => (
                                    <Card
                                        key={card.title}
                                        minWidth={265}
                                        data-aos="zoom-in"
                                        data-aos-delay={100 * (index + 1)}
                                            >
                                        <Box display="flex" flexWrap={{ _: 'wrap', laptopS: 'nowrap' }}>
                                            <Box
                                                maxWidth={220}
                                                mr={{ _: 0, laptopS: 20 }}
                                                mb={{ _: 20, laptopS: 0 }}
                                                    >
                                                {card.poster}
                                            </Box>
                                            <Box width="fit-content">
                                                <Typography
                                                    variant="h3"
                                                    color={{
                                                                    light: 'light.brandBlack',
                                                                    dark: 'dark.white',
                                                                }}
                                                    mb={8}
                                                        >
                                                    {card.title}
                                                </Typography>
                                                <Typography
                                                    as="div"
                                                    variant="paragraph"
                                                    color={{
                                                                    light: 'light.brandBlack',
                                                                    dark: 'commons.white',
                                                                }}
                                                    mb={60}
                                                        >
                                                    {card.description}
                                                    {card.apiDocs && (
                                                    <a href="https://docs.surfinite.com/" target="_blank" rel="noreferrer">
                                                        <ExternalLinkWrapper mt="0.5rem">
                                                            <Typography fontWeight={FONT_BOLD} mr="0.5rem" variant="paragraph" color={{ light: "light.brandAccent", dark: "dark.brandAccentNight" }}>{card.apiDocs}</Typography>
                                                            <ArrowUp size="medium" />
                                                        </ExternalLinkWrapper>
                                                    </a>
                                                    )}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Card>
                                    ))}
                            </Slider>
                        )}
                    </Box>
                </GridChild>
            </GridParent>
        </Section>
    );
};

export default OurPros;
