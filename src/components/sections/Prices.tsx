import { hexToRGB } from '@utils/helpers';
import { useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import { useColorMode } from '@hooks';

import { appConfig } from '@theme/appConfig';
import colors from '@theme/configs/colors';

import Box from '@components/atoms/Box';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

// import BetaBanner from '@components/molecules/BetaBanner';
import TariffCard from '@components/molecules/TariffCard';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';
import mediaQueries from "@theme/configs/mediaQueries";
import { PaymentsSupported } from "@components/organisms/PaymentsSupported";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Slider from "@components/molecules/Slider";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import LinkAsButton from "@components/atoms/LinkAsButton";

const query = graphql`
    query {
        trial7days: file(relativePath: { eq: "illustration/trial7day.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const TabOption = styled.div<{ isActive: boolean }>`
    padding: 10px 10px;

    &:hover {
        cursor: pointer;
    }

    ${({ isActive, theme }) =>
        isActive &&
        `
    background-color: rgba(${
        theme.mode === ColorMode.light
            ? hexToRGB(theme.colors.light.brandAccent)
            : hexToRGB(theme.colors.dark.brandAccentNight)
    }, 0.1);
  `}

    ${mediaQueries.tablet} {
        padding: 10px 20px;
    }
`;

const Trial7Days = styled.div`
    align-items: center;
    background: ${({ theme }) => theme.mode === ColorMode.light ? theme.colors.gradients.main : theme.colors.gradients.darkMain};
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
    padding: 0 15px;

    ${mediaQueries.tablet} {
        padding: 0 30px;
    }
`;

export enum ISubscriptions {
    monthly = 'monthly',
    mon3 = 'mon3',
    mon6 = 'mon6',
    mon12 = 'mon12',
};

export const discount = {
    [ISubscriptions.monthly]: '0',
    [ISubscriptions.mon3]: '10',
    [ISubscriptions.mon6]: '15',
    [ISubscriptions.mon12]: '20',
}

const Prices = () => {
    const { t } = useTranslation();
    const [isMounted , setIsMounted] = useState(false);
    const { colorMode } = useColorMode();
    const [activePeriod, setActivePeriod] = useState<ISubscriptions>(ISubscriptions.monthly);
    const { tablet } = useBreakpoint();
    const { trial7days } = useStaticQuery(query);

    const handleSubTypeChange = (val: ISubscriptions) => setActivePeriod(val);

    useLayoutEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) return null


    return (
        <Section id="prices">
            <GridParent>
                <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }}>
                    <Box
                        display={{ _: "block", tablet: "flex"}}
                        justifyContent={{ _: 'center', tablet: 'space-between' }}
                        flexWrap="wrap"
                        gridRowGap={20}
                        mb={{ _: 13, tablet: 20 }}
                    >
                        <Box display="flex">
                            <Typography
                                textAlign="center"
                                variant="h2"
                                color={{ light: 'light.brandBlack', dark: 'commons.white' }}
                        >
                                {t('prices.heading')}
                            </Typography>
                            {activePeriod !== ISubscriptions.monthly && (
                            <Box ml={20} p="13px 20px" borderRadius={6} backgroundColor={colorMode === ColorMode.light ? `rgba(${hexToRGB(colors.light.success)}, 0.1)` : `rgba(${hexToRGB(colors.dark.successNight)}, 0.1)`}>
                                <Typography variant="accent" color={{ light: 'light.success', dark: 'dark.successNight'}}>{t('prices.discount')} - {discount[activePeriod]}%</Typography>
                            </Box>
                                    )}
                        </Box>

                        <Box
                            display="flex"
                            alignItems="center"
                            flexDirection={{ _: 'column', tablet: 'row'}}
                            justifyContent={{ _: 'center', tablet: 'unset' }}
                            mt={{ _: 20, tablet: 0 }}
                            flexWrap={{ _: 'wrap', tablet: 'nowrap' }}
                        >
                            <Typography
                                variant="paragraph"
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                style={{ whiteSpace: 'nowrap'}}
                                color={{ light: 'light.brandBlack', dark: 'dark.grey' }}
                                mb={{ _: 10, tablet: 0 }}
                            >
                                {t('prices.subscriptionType')}
                            </Typography>
                            <Box
                                display="flex"
                                flexDirection={{ _: 'column', tablet: 'row'}}
                                textAlign="center"
                                width={{ _: '100%', tablet: undefined}}
                                borderRadius="6px"
                                overflow="hidden"
                                backgroundColor={
                                    colorMode === ColorMode.light
                                        ? colors.light.grey
                                        : colors.dark.eclipseMedium
                                }
                                ml={{ _: undefined, tablet: 20}}
                            >
                                {Object.values(ISubscriptions).map((tariff) => (
                                    <TabOption
                                        key={tariff}
                                        onClick={() => handleSubTypeChange(tariff as ISubscriptions)}
                                        isActive={activePeriod === tariff}
                                >
                                        <Typography
                                            variant="paragraph"
                                            color={
                                                activePeriod === tariff
                                                ? {
                                                      light: 'light.brandAccent',
                                                      dark: 'dark.brandAccentNight',
                                                  }
                                                : { light: 'light.darkGrey', dark: 'dark.grey' }
                                        }
                                    >
                                            {tariff === ISubscriptions.monthly ?
                                                    t('prices.monthly') : (
                                                        <>
                                                            {`${tariff.replace('mon', '')} ${t('prices.month')} `}
                                                            {/* <Typography variant="paragraph" as="span" color={{ light: 'light.brandAccent', dark: 'dark.brandAccentNight'}}>(-{discount[tariff]}%)</Typography> */}
                                                        </>
                                                    )
                                            }
                                        </Typography>
                                    </TabOption>
                                        ))}
                            </Box>
                        </Box>
                    </Box>

                    <Trial7Days>
                        <Box display="flex" flex={1} alignItems="center" justifyContent={{ _: 'center', tablet: undefined}}>
                            <GatsbyImage alt="trial 7 days poster" image={trial7days.childImageSharp.gatsbyImageData} />
                            <Box flex={{ _: undefined, tablet: 1 }} ml={15}>
                                <Typography variant="h4" color={{ light: 'commons.white', dark: 'commons.white' }}>{t('prices.startTrial7days')}</Typography>
                            </Box>
                        </Box>
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/* @ts-ignore */}
                        <LinkAsButton to="/registration" variant="beta" width={{ _: '100%', tablet: 'unset'}} mb={{ _: 20, tablet: 0 }}>
                            <Typography variant="accent" as="p" color="commons.white" textAlign="center">{t('prices.startTrial')}</Typography>
                        </LinkAsButton>
                    </Trial7Days>

                    <Box
                        display={{ _: 'flex', tablet: 'grid' }}
                        gridTemplateColumns={{
                            _: '',
                            tablet: 'repeat(auto-fit, minMax(240px, 1fr) minMax(240px, 1fr))',
                        }}
                        gridGap={{ _: 15, tablet: 30 }}
                        flexWrap={{ _: 'nowrap' }}
                        overflow="visible"
                    >

                        {tablet ? appConfig.tariffs.map((tariff, index) => (
                            <TariffCard
                                key={tariff.key}
                                tariff={tariff}
                                activePeriod={activePeriod}
                                delay={50 * index + 100}
                            />
                        )) : (
                            <Slider spaceBetween={10} slidesPerView="auto" showOverflow shouldShrink>
                                {appConfig.tariffs.map((tariff, index) => (
                                    <TariffCard
                                        key={tariff.key}
                                        tariff={tariff}
                                        activePeriod={activePeriod}
                                        delay={50 * index + 100}
                                            />
                                    ))}
                            </Slider>
                        )}
                    </Box>
                </GridChild>

                <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }} mt={30}>
                    <PaymentsSupported />
                </GridChild>

                {/* <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }} mt={30}> */}
                {/*    <BetaBanner /> */}
                {/* </GridChild> */}
            </GridParent>
        </Section>
    );
};

export default Prices;
