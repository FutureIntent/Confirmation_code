import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import appTheme from '@theme/configs';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import ArrowUp from '@components/molecules/Icons/ArrowUp';

import Logo from '@components/organisms/Logo';
import Link from '@components/atoms/Link';
import GridChild from '@components/templates/GridChild';
import Navigation from '@components/templates/Header/Navigation';
import { useTranslation } from "react-i18next";

const FirstRow = () => {
    const { t } = useTranslation();
    const breakpoints = useBreakpoint();

    return (
        <>
            <GridChild
                gridColumn={{
                    _: 'span 6',
                    tablet: 'span 3',
                    desktop: '2/span 2'
                }}
                mb={{ _: 20, tablet: 30}}
            >
                <Link to="/" ariaLabel="Go to homepage">
                    <Logo isOnDark />
                </Link>
            </GridChild>
            {breakpoints.tabletL && (
                <GridChild gridColumn="span 6">
                    <Box display="flex" alignItems="center" height="100%">
                        <Navigation isOnDark isFooter />
                    </Box>
                </GridChild>
            )}
            <GridChild gridColumn={{ _: '9/ span 4', tablet: '10/ span 3', desktop: '10 / span 2' }}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    height="100%"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    cursor="pointer"
                >
                    <Typography variant="accent" color="commons.white">
                        {t('shared.up')}
                    </Typography>
                    <ArrowUp color={appTheme.colors.commons.white} />
                </Box>
            </GridChild>
        </>
    );
};

export default FirstRow;
