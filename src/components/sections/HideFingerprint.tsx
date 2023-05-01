import { useTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LazyLoad } from 'react-observer-api';

import Box from '@components/atoms/Box';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

import FingerPrintWithText from '@components/molecules/Icons/FingerPrint_withText';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

const HideFingerprint = () => {
    const { t } = useTranslation();

    return (
        <Section id="hide-fingerprint">
            <GridParent>
                <GridChild gridColumn={{ _: 'span 12', tablet: 'span 7', desktop: '3/ span 5' }}>
                    <LazyLoad>
                        <FingerPrintWithText />
                    </LazyLoad>
                </GridChild>

                <GridChild gridColumn={{ _: 'span 12', tablet: 'span 5', desktop: 'span 3' }}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        height="100%"
                        data-aos="fade-right"
                    >
                        <Typography
                            variant="h2"
                            color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                            mb={{ _: 20, laptopS: 40 }}
                        >
                            {t('hideFingerprint.heading')}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color={{ light: 'light.brandBlack', dark: 'dark.lightGrey' }}
                            mb={11}
                        >
                            {t('hideFingerprint.subTitle')}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color={{ light: 'light.brandBlack', dark: 'dark.lightGrey' }}
                            mb={30}
                        >
                            {t('hideFingerprint.subTitle2')}
                        </Typography>
                    </Box>
                </GridChild>
            </GridParent>
        </Section>
    );
};

export default HideFingerprint;
