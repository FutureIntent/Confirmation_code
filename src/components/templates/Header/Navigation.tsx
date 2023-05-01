import { props } from '@styled-system/should-forward-prop';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';
import { usePageContext } from '@providers/PageContext';

import mediaQueries from '@theme/configs/mediaQueries';

import ExternalLinkWrapper from '@components/atoms/ExternalLinkWrapper';
import AppLink from '@components/atoms/Link';
import Typography from '@components/atoms/Typography';
import { fontsConfig } from '@components/atoms/Typography/Typography';

const NavigationItem = styled(Link).withConfig({
    shouldForwardProp: (prop) => ![...props, 'isOnDark'].includes(String(prop)),
})<{ isOnDark?: boolean }>`
    color: ${({ theme, isOnDark }) => {
        if (isOnDark) {
            return theme.colors.light.grey;
        }

        return theme.mode === ColorMode.light
            ? theme.colors.light.brandBlack
            : theme.colors.commons.white;
    }};
    ${{ ...fontsConfig.h4 }};
    cursor: pointer;

    ${mediaQueries.tabletL} {
        ${{ ...fontsConfig.caption }};
    }

    &:not(:last-of-type) {
        margin-right: ${({ isOnDark }) => !isOnDark && '30px'};
    }

    white-space: nowrap;
    &.is-current {
        color: ${({ theme, isOnDark }) => {
            if (isOnDark) {
                return theme.colors.dark.brandAccentNight;
            }

            return theme.mode === ColorMode.light
                ? theme.colors.light.brandAccent
                : theme.colors.dark.brandAccentNight;
        }};
    }
`;

const AppNavigationItem = styled(AppLink).withConfig({
    shouldForwardProp: (prop) => ![...props, 'isOnDark'].includes(String(prop)),
})<{ isOnDark?: boolean }>`
    color: ${({ theme, isOnDark }) => {
        if (isOnDark) {
            return theme.colors.light.grey;
        }

        return theme.mode === ColorMode.light
            ? theme.colors.light.brandBlack
            : theme.colors.commons.white;
    }};
    ${{ ...fontsConfig.h4 }};

    ${mediaQueries.tabletL} {
        ${{ ...fontsConfig.caption }};
    }

    &:not(:last-of-type) {
        margin-right: ${({ isOnDark }) => !isOnDark && '30px'};
    }

    white-space: nowrap;
    &.is-current {
        color: ${({ theme, isOnDark }) => {
            if (isOnDark) {
                return theme.colors.dark.brandAccentNight;
            }

            return theme.mode === ColorMode.light
                ? theme.colors.light.brandAccent
                : theme.colors.dark.brandAccentNight;
        }};
    }
`;

const Wrapper = styled.div<{ isVertical: boolean; isFooter?: boolean }>`
    align-items: center;
    display: flex;
    margin-left: 4vw;

    ${({ isVertical }) =>
        isVertical &&
        `
        flex-direction: column;

        a:not(:last-of-type) {
            margin: 0 0 20px 0;
        }
    `}

    ${({ isFooter }) =>
        isFooter &&
        `
        justify-content: space-between;
        width: 100%;
        margin-left: unset;
    `}
`;

const Navigation = ({
    isOnDark = false,
    isVertical = false,
    isFooter = false,
    handleClick = () => {},
}: {
    isOnDark?: boolean;
    isVertical?: boolean;
    isFooter?: boolean;
    handleClick?: () => void;
}) => {
    const { t } = useTranslation();
    const {
        i18n: { originalPath },
    } = usePageContext();

    const links = [
        { label: t('nav.howTo'), anchor: 'how-to' },
        { label: t('nav.earnWithoutBarriers'), anchor: 'earn-without-barriers' },
        { label: t('nav.hideFingerprints'), anchor: 'hide-fingerprint' },
        { label: t('nav.ourPros'), anchor: 'our-pros' },
        { label: t('nav.prices'), anchor: 'prices' },
        { label: t('nav.faq'), anchor: 'faq' },
        // { label: t('nav.reviews'), anchor: 'reviews' },
    ];

    return (
        <Wrapper isVertical={isVertical} isFooter={isFooter}>
            {originalPath === '/'
                ? links.map((link) => (
                      <NavigationItem
                          activeClass="is-current"
                          to={link.anchor}
                          spy
                          isDynamic
                          onClick={handleClick}
                          offset={-140}
                          // duration={1000}
                          key={link.anchor}
                          isOnDark={isOnDark}
                      >
                          {link.label.toUpperCase()}
                      </NavigationItem>
                  ))
                : links.map((link) => (
                      <AppNavigationItem
                          to={`/#${link.anchor}`}
                          key={link.anchor}
                          isOnDark={isOnDark}
                      >
                          {link.label.toUpperCase()}
                      </AppNavigationItem>
                  ))}
            {isOnDark && (
                <a href="https://docs.surfinite.com/" target="_blank" rel="noreferrer">
                    <ExternalLinkWrapper>
                        <Typography
                            variant={{ _: 'h4', tablet: 'caption' }}
                            color="light.grey"
                            transformText="uppercase"
                        >
                            {t('ourPros.card6.apiDocs')}
                        </Typography>
                    </ExternalLinkWrapper>
                </a>
            )}
        </Wrapper>
    );
};

export default Navigation;
