import { getClampValue } from '@utils/helpers';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import styled from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import { BETA_REGISTRATION_END } from '@theme/appConfig';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import ColorModeSwitch from '@components/atoms/ColorModeSwitch';
import Container from '@components/atoms/Container';
import Link from '@components/atoms/Link';
import Typography from '@components/atoms/Typography';

// import BetaNotificationBar from '@components/molecules/BetaNotificationBar';
import FingerPrint from '@components/molecules/Icons/FingerPrint';
import LanguageDropdown from '@components/molecules/LanguageDropdown/LanguageDropdown';

import DownloadDemo from '@components/organisms/DownloadDemo/DownloadDemo';
import Logo from '@components/organisms/Logo';
import SideMenu from '@components/organisms/SideMenu';

import Navigation from '@components/templates/Header/Navigation';
import dayjs from "dayjs";

const StyledHeader = styled.header`
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light
            ? theme.colors.commons.white
            : theme.colors.dark.eclipseMedium};
    border-bottom: 1px solid
        ${({ theme }) =>
            theme.mode === ColorMode.light
                ? theme.colors.dark.white
                : theme.colors.dark.eclipseMedium};
    height: var(--header-height);
    padding: 0 ${getClampValue('15px', '45px')};
    position: fixed;

    top: 0;
    width: 100%;
    z-index: 500;
`;

const BurgerWrapper = styled.div`
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light
            ? theme.colors.light.lightGrey
            : theme.colors.dark.eclipseMedium};
    border-radius: ${({ theme }) => theme.space['2xs']};
    margin-left: 15px;
    padding: 10px;

    &:hover {
        opacity: 0.85;
    }

    ${({ theme }) =>
        theme.mode === ColorMode.light
            ? `
                background-color: ${theme.colors.light.lightGrey};
    `
            : `
                background-color: ${theme.colors.dark.eclipseLight};
                color: ${theme.colors.commons.white};
            `};
`;

const Header = ({ hasBurger }: { hasBurger: boolean }) => {
    const gatsbyBreakpoints = useBreakpoint();
    // const [showBanner, setShowBanner] = useState(dayjs(BETA_REGISTRATION_END, 'DD.MM.YY').isAfter(dayjs()));
    //
    // // const handleCloseBanner = () => setShowBanner(false);

    return (
        <>
            <StyledHeader>
                <Container>
                    <Box
                        display=" flex"
                        alignItems="center"
                        justifyContent="space-between"
                        height="100%"
                    >
                        <Box display="flex" alignItems="center">
                            <Link to="/" ariaLabel="Go to homepage">
                                <Logo />
                            </Link>
                            <LanguageDropdown />
                            {gatsbyBreakpoints.laptop && hasBurger && <Navigation />}
                        </Box>

                        <Box display="flex" alignItems="center">
                            <Box display="inline-block">
                                <ColorModeSwitch />
                            </Box>
                            <Box display={{ _: 'none', tablet: 'flex' }}>
                                {!dayjs(BETA_REGISTRATION_END, 'DD.MM.YY').isAfter(dayjs()) && false && (
                                    <Button variant="secondary" ml={15} btnSize="small">
                                        <Box display="flex">
                                            <Typography
                                                as="div"
                                                variant="accent"
                                                color={{
                                                    dark: 'dark.brandAccentNight',
                                                    light: 'light.brandAccent',
                                                }}
                                                mr={5}
                                            >
                                                Проверить фингерпринт
                                            </Typography>
                                            <FingerPrint />
                                        </Box>
                                    </Button>
                                )}
                                <Box ml={10}>
                                    <DownloadDemo size="small" />
                                </Box>
                            </Box>
                            {!gatsbyBreakpoints.laptop && hasBurger && (
                                <BurgerWrapper>
                                    <SideMenu />
                                </BurgerWrapper>
                            )}
                        </Box>
                    </Box>
                </Container>
            </StyledHeader>
            {/* {showBanner && <BetaNotificationBar handleCloseBanner={handleCloseBanner} />} */}
        </>
    );
};

export default Header;
