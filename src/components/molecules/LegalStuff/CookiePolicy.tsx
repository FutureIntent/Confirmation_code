import GridParent from "@components/templates/GridParent";
import GridChild from "@components/templates/GridChild";
import Typography from "@components/atoms/Typography";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { ColorMode } from "@providers/ColorModeProvider/ColorModeContext";
import { fontsConfig } from "@components/atoms/Typography/Typography";
import HtmlWithText from "@components/molecules/LegalStuff/CookiePolicy/HtmlWithText";

const Wrapper = styled.div<{ footerHeight?: number }>`
    background-color: ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.dark.eclipseMedium : theme.colors.commons.white};
    color: ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.dark.white : theme.colors.light.brandBlack};
    margin-bottom: 160px;
    padding: 30px 40px;
    ${{ ...fontsConfig.paragraph }};

    p, h3, h4  {
        color: ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.dark.white : theme.colors.light.brandBlack};
    }

    li {
        list-style: '—';
        margin: 10px 0 10px 10px;
        padding-left: 10px;
        ${{ ...fontsConfig.paragraph }};

        &:last-of-type {
            margin-bottom: 30px;
        }
    }

    a {
        color: ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.dark.brandAccentNight : theme.colors.light.brandAccent};

        &:hover, p:hover {
            text-decoration: underline ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.dark.lightGrey : theme.colors.light.darkGrey};
        }
    }

    table {
        margin-bottom: 60px;
        margin-top: 40px;

        th {
            background-color: ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.dark.eclipseMedium : theme.colors.light.lightGrey};
        }

        tr:not(:last-of-type) {
            border-bottom: 1px solid ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.dark.lightGrey : theme.colors.light.darkGrey};
        }
        td, th {
            padding: 10px;

            &:first-of-type{
                background-color: ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.dark.eclipseMedium : theme.colors.light.lightGrey};
            }
        }
    }
`;

const CookiePolicy = () => {
    const { t } = useTranslation();

    return (
        <GridParent>
            <GridChild gridColumn={{ _: 'span 12', laptopS: '4/ span 6' }}>
                <Typography variant="h1" color={{ light: 'light.brandBlack', dark: 'dark.white'}} mb={15} textAlign="center">{t('cookiePolicy')}</Typography>
                <Wrapper>
                    <HtmlWithText />
                </Wrapper>
            </GridChild>
        </GridParent>
    )
}

export default CookiePolicy;
