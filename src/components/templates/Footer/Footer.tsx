import { props } from '@styled-system/should-forward-prop';
import { getClampValue } from '@utils/helpers';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { order, OrderProps } from 'styled-system';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import { socialsLinks } from '@theme/const';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';

import TelegramInfo from '@components/molecules/TelegramInfo/TelegramInfo';

import ContactUsModal from '@components/organisms/ContactUsModal/ContactUsModal';
import DownloadDemo from '@components/organisms/DownloadDemo/DownloadDemo';

import FirstRow from '@components/templates/Footer/FirstRow';
import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

import FacebookStroke from "@components/molecules/Icons/FacebookStroke";
import TwitterStroke from "@components/molecules/Icons/TwitterStroke";
import YoutubeStroke from "@components/molecules/Icons/YoutubeStroke";
import colors from "@theme/configs/colors";

const StyledFooter = styled.footer`
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light ? theme.colors.light.brandBlack : theme.colors.dark.black};
    height: var(--footer-height);

    padding: ${getClampValue('30px', '60px')} ${getClampValue('15px', '30px')};
`;

const StyledGridChild = styled(GridChild).withConfig({
    shouldForwardProp: (prop) => ![...props, 'order'].includes(String(prop)),
})<OrderProps>`
    ${order};
`;

const IconWrapper = styled.div`
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.dark.brandAccentNight};
    border-radius: 4px;
    display: flex;
    height: 40px;
    justify-content: center;
    padding: 11px 8px;
    width: 40px;
`;

const SecondRow = () => {
    const { t } = useTranslation();

    return (
        <>
            <StyledGridChild
                order={{ _: 4, tablet: 1 }}
                gridColumn={{
                    _: 'span 12',
                    tablet: 'span 3',
                    tabletL: 'span 3',
                    desktop: '2/ span 2',
                }}
            >
                <Box>
                    <Typography variant="h4" color="commons.white" mb={16}>
                        {t('shared.contactUs')}
                    </Typography>
                    <Box display="flex" flexDirection={{ _: 'row', tablet: 'column'}} maxWidth="fit-content" gridGap={10}>
                        <Box
                            display="flex"
                            alignItems="center"
                            mt={{ _: 'unset', tablet: 16 }}
                            border={`1px solid ${colors.dark.brandAccentNight}`}
                            borderRadius={4}
                            maxHeight={40}
                            padding="11px 8px"
                            width="100%"
                        >
                            <TelegramInfo iconSize="medium" />
                        </Box>
                        <Box display="flex" gridGap={10}>
                            <a
                                href={socialsLinks.facebook}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="facebook"
                        >
                                <IconWrapper>
                                    <FacebookStroke size="fullWidth" />
                                </IconWrapper>
                            </a>
                            <a
                                href={socialsLinks.twitter}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="twitter"
                        >
                                <IconWrapper>
                                    <TwitterStroke size="fullWidth" />
                                </IconWrapper>
                            </a>
                            <a
                                href={socialsLinks.youtube}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="youtube"
                        >
                                <IconWrapper>
                                    <YoutubeStroke size="fullWidth" />
                                </IconWrapper>
                            </a>
                        </Box>
                    </Box>
                </Box>
            </StyledGridChild>

            <StyledGridChild
                order={2}
                gridColumn={{
                    _: 'span 12',
                    tablet: '4/ span 6',
                    desktop: '4/ span 3'
                }}
            >
                <Typography variant="h4" color="commons.white" mb={10}>
                    Surfinite
                </Typography>
                <Box display="flex" alignItems="center">
                    <Typography variant="paragraph" color="light.mediumGrey">
                        {t('shared.copy')}
                    </Typography>
                </Box>
            </StyledGridChild>

            {/* <StyledGridChild */}
            {/*    order={{ _: 3, tablet: 4, desktop: 3 }} */}
            {/*    gridColumn={{ _: 'span 12', tablet: '4/ span 6', desktop: '7/ span 3' }} */}
            {/* > */}
            {/*    <Box> */}
            {/*        <Typography variant="h4" color="commons.white" mb={10}> */}
            {/*            {INFO_COMPANY} */}
            {/*        </Typography> */}
            {/*        <Typography variant="paragraph" color="light.mediumGrey" mb={16}> */}
            {/*            {t('shared.registrationNumber')}: {INFO_REG_NUMBER} */}
            {/*        </Typography> */}
            {/*        <Typography variant="paragraph" color="light.mediumGrey" mb={16}> */}
            {/*            {INFO_ADDRESS} */}
            {/*        </Typography> */}
            {/*    </Box> */}
            {/* </StyledGridChild> */}

            <StyledGridChild
                order={{ _: 1, tablet: 3, desktop: 4 }}
                gridColumn={{ _: 'span 12', tablet: '10/ span 3', desktop: '10/ span 2' }}
            >
                <Box display="flex" justifyContent="flex-end" width="100%">
                    <Box
                        display="inline-flex"
                        flexDirection={{ _: 'row', tablet: 'column' }}
                        width={{ _: '100%', tablet: 'auto' }}
                        flexWrap="wrap"
                        gridGap={10}
                    >
                        <DownloadDemo />

                        <ContactUsModal>
                            <Button
                                variant="secondary"
                                mt={{ _: 0, tablet: 10 }}
                            >
                                <Typography variant="accent" color="light.lightGrey">
                                    {t('shared.writeUs')}
                                </Typography>
                            </Button>
                        </ContactUsModal>
                    </Box>
                </Box>
            </StyledGridChild>
        </>
    );
};

const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            <StyledFooter>
                <GridParent gridRowGap={14}>
                    <FirstRow />
                    <SecondRow />
                </GridParent>
            </StyledFooter>
            <Box display="flex" justifyContent="center" width="100%" backgroundColor="rgb(21 25 41)" p={30} flexWrap="wrap">
                <a href="/terms-of-use" target="_blank" rel="noreferrer">
                    <Typography variant="paragraph" color="light.mediumGrey">
                        {t('termsOfUse')}
                    </Typography>
                </a>
                <Typography variant="paragraph" color="light.mediumGrey" px={10}>
                    |
                </Typography>
                <a href="/eula" target="_blank" rel="noreferrer">
                    <Typography variant="paragraph" color="light.mediumGrey">
                        {t('eula')}
                    </Typography>
                </a>
                <Typography variant="paragraph" color="light.mediumGrey" px={10}>
                    |
                </Typography>
                <a href="/privacy-policy" target="_blank" rel="noreferrer">
                    <Typography variant="paragraph" color="light.mediumGrey">
                        {t('privacyPolicy')}
                    </Typography>
                </a>
                <Typography variant="paragraph" color="light.mediumGrey" px={10}>
                    |
                </Typography>
                <a href="/cookie-policy" target="_blank" rel="noreferrer">
                    <Typography variant="paragraph" color="light.mediumGrey">
                        {t('cookiePolicy')}
                    </Typography>
                </a>
            </Box>
        </>
)};

export default Footer;
