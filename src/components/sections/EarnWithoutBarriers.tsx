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
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Slider from "@components/molecules/Slider";
import { useLayoutEffect, useState } from "react";

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
    animation: float-animation 6s linear infinite;
    aspect-ratio: 1 / 1;
    bottom: -33%;
    left: 73%;
    position: absolute;
    width: 50%;

    z-index: -1;

    @keyframes float-animation {
        from {
            transform: rotate(0deg) translate(0.5%, 1%) rotate(0deg);
        }
        to {
            transform: rotate(360deg) translate(0.5%, 1%) rotate(-360deg);
        }
    }

    ${mediaQueries.desktop} {
        bottom: -33%;
        left: 73%;
    }
`;

const query = graphql`
    query {
        partnerMarketing: file(relativePath: { eq: "illustration/partnerMarketing.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        sportBets: file(relativePath: { eq: "illustration/sportBets.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        ecommerce: file(relativePath: { eq: "illustration/ecommerce.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        socialBoost: file(relativePath: { eq: "illustration/socialBoost.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        webParse: file(relativePath: { eq: "illustration/webParse.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        airDrop: file(relativePath: { eq: "illustration/airdrop.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const EarnWithoutBarriers = () => {
    const { t } = useTranslation();
    const [isMounted , setIsMounted] = useState(false);
    const { tablet } = useBreakpoint();
    const { partnerMarketing, sportBets, ecommerce, socialBoost, webParse, airDrop } = useStaticQuery(query);

    const cards = [
        {
            poster: (
                <GatsbyImage
                    loading="eager"
                    image={partnerMarketing.childImageSharp.gatsbyImageData}
                    alt={t('earnWithoutBarriers.cards.card1.title')}
                />
            ),
            title: t('earnWithoutBarriers.cards.card1.title'),
            subTitle: t('earnWithoutBarriers.cards.card1.subTitle'),
        },
        {
            poster: (
                <GatsbyImage
                    loading="eager"
                    image={sportBets.childImageSharp.gatsbyImageData}
                    alt={t('earnWithoutBarriers.cards.card2.title')}
                />
            ),
            title: t('earnWithoutBarriers.cards.card2.title'),
            subTitle: t('earnWithoutBarriers.cards.card2.subTitle'),
        },
        {
            poster: (
                <GatsbyImage
                    loading="eager"
                    image={ecommerce.childImageSharp.gatsbyImageData}
                    alt={t('earnWithoutBarriers.cards.card3.title')}
                />
            ),
            title: t('earnWithoutBarriers.cards.card3.title'),
            subTitle: t('earnWithoutBarriers.cards.card3.subTitle'),
        },
        {
            poster: (
                <GatsbyImage
                    loading="eager"
                    image={airDrop.childImageSharp.gatsbyImageData}
                    alt={t('earnWithoutBarriers.cards.card4.title')}
                    />
            ),
            title: t('earnWithoutBarriers.cards.card4.title'),
            subTitle: t('earnWithoutBarriers.cards.card4.subTitle'),
        },
        {
            poster: (
                <GatsbyImage
                    loading="eager"
                    image={socialBoost.childImageSharp.gatsbyImageData}
                    alt={t('earnWithoutBarriers.cards.card5.title')}
                />
            ),
            title: t('earnWithoutBarriers.cards.card5.title'),
            subTitle: t('earnWithoutBarriers.cards.card5.subTitle'),
        },
        {
            poster: (
                <GatsbyImage
                    loading="eager"
                    image={webParse.childImageSharp.gatsbyImageData}
                    alt={t('earnWithoutBarriers.cards.card6.title')}
                />
            ),
            title: t('earnWithoutBarriers.cards.card6.title'),
            subTitle: t('earnWithoutBarriers.cards.card6.subTitle'),
        },
    ];

    useLayoutEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) return null

    return (
        <Section id="earn-without-barriers">
            <GridParent>
                <SquareWrapper>
                    <BackgroundSquare />
                </SquareWrapper>
                <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 3' }}>
                    <Typography
                        data-aos="fade-right"
                        data-aos-delay="50"
                        variant="h2"
                        color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                        mb={40}
                    >
                        {t('earnWithoutBarriers.heading')}
                    </Typography>
                    <Typography
                        data-aos="fade-right"
                        data-aos-delay="150"
                        variant="paragraph"
                        color={{ light: 'light.brandBlack', dark: 'dark.lightGrey' }}
                        mb={11}
                    >
                        {t('earnWithoutBarriers.subTitle')}
                    </Typography>
                    <Typography
                        data-aos="fade-right"
                        data-aos-delay="250"
                        variant="paragraph"
                        color={{ light: 'light.brandBlack', dark: 'dark.lightGrey' }}
                        mb={30}
                    >
                        {t('earnWithoutBarriers.subTitle2')}
                    </Typography>

                    <LinkAsButton to="/registration" data-aos="fade-right" data-aos-delay="350">
                        <Typography variant="accent" color="commons.white">
                            {t('shared.register')}
                        </Typography>
                    </LinkAsButton>
                </GridChild>

                <GridChild gridColumn={{ _: 'span 12', laptopS: 'span 5' }}>
                    <Box
                        display={{ _: 'flex', tablet: 'grid' }}
                        gridTemplateColumns={{
                            _: '',
                            tablet: 'repeat(auto-fill, minMax(238px, 400px))',
                            laptopS: 'repeat(auto-fill, minMax(238px, 1fr))',
                        }}
                        gridGap={{ _: 10, tablet: 25 }}
                        justifyContent="center"
                        flexWrap={{ _: 'wrap', tablet: 'unset' }}
                        overflow="visible"
                        mt={{ _: '40px', laptopS: 0 }}
                    >
                        {tablet ? cards.map((card, index) => (
                            <Card
                                key={card.title}
                                p={0}
                                cardSize="small"
                                data-aos="zoom-in"
                                data-aos-delay={100 * (index + 1)}
                            >
                                {card.poster}
                                <Box minWidth={200} p="14px 20px 30px">
                                    <Typography
                                        variant="h4"
                                        color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }}
                                    >
                                        {card.title}
                                    </Typography>
                                </Box>
                            </Card>
                        )) : (
                            <Slider slidesPerView="auto" spaceBetween={20} showOverflow shouldShrink>
                                {cards.map((card, index) => (
                                    <Card
                                        key={card.title}
                                        p={0}
                                        cardSize="small"
                                        data-aos="zoom-in"
                                        data-aos-delay={100 * (index + 1)}
                                            >
                                        {card.poster}
                                        <Box minWidth={200} p="14px 20px 30px">
                                            <Typography
                                                variant="h4"
                                                color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }}
                                                    >
                                                {card.title}
                                            </Typography>
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

export default EarnWithoutBarriers;
