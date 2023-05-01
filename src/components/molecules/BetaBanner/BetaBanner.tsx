import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import { useColorMode } from '@hooks';
import useConfetti from '@hooks/useConfetti';

import { BETA_REGISTRATION_END } from '@theme/appConfig';
import colors from '@theme/configs/colors';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';
import LinkAsButton from "@components/atoms/LinkAsButton";
import dayjs from "dayjs";

const TextWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    z-index: 100;

    ${mediaQueries.tablet} {
        align-items: flex-start;
    }
`;

const query = graphql`
    query {
        discountBanner: file(relativePath: { eq: "illustration/main_home_for_banner.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const ConfettiComponent = () => {
    useConfetti({
        leftId: 'bottom-left-confetti',
        rightId: 'bottom-right-confetti',
    });

    return (
        <>
            <Box
                position="absolute"
                opacity="60%"
                bottom={0}
                left="10%"
                id="bottom-left-confetti"
            />
            <Box
                position="absolute"
                opacity="60%"
                bottom={0}
                left="80%"
                id="bottom-right-confetti"
            />
        </>
    );
};

const BetaBanner = () => {
    const { t } = useTranslation();
    const { colorMode } = useColorMode();
    const { discountBanner } = useStaticQuery(query);
console.log({ t: dayjs(BETA_REGISTRATION_END, 'DD.MM.YY').isAfter(dayjs())})
    if(!dayjs(BETA_REGISTRATION_END, 'DD.MM.YY').isAfter(dayjs())) return null;

    return (
        <Box
            overflow="hidden"
            position="relative"
            display="flex"
            alignItems="center"
            minHeight={304}
            backgroundColor={
                colorMode === ColorMode.light ? colors.light.brandBlack : colors.dark.eclipseLight
            }
            borderRadius={6}
            padding={{ _: '10px 15px 30px', tablet: '30px 40px 50px' }}
            flexWrap={{ _: 'wrap', tablet: 'nowrap' }}
        >
            <Box minWidth={{ _: 167, tablet: 208 }} py={5} mr={30} zIndex={100} maxWidth={208}>
                <GatsbyImage
                    loading="eager"
                    image={discountBanner.childImageSharp.gatsbyImageData}
                    alt="discount"
                />
            </Box>
            <TextWrapper>
                <Typography
                    variant={{ _: 'h3', tablet: 'h2' }}
                    color={{ light: 'commons.white', dark: 'dark.white' }}
                >
                    {t('betaBanner.heading')}
                </Typography>
                <Typography
                    as="p"
                    variant="accent"
                    color={{ light: 'commons.white', dark: 'dark.white' }}
                    my={20}
                >
                    {t('betaBanner.subTitle')}
                </Typography>
                <LinkAsButton to="/registration" variant="beta">{t('shared.getFreeBeta')}</LinkAsButton>
            </TextWrapper>
            <ConfettiComponent />
        </Box>
    );
};

export default BetaBanner;
