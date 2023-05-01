import { graphql, useStaticQuery } from 'gatsby';
import { ReactElement } from 'react';
import styled from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';
import { usePageContext } from '@providers/PageContext';

import mediaQueries from '@theme/configs/mediaQueries';

import CountryFlag from '@components/atoms/CountryFlag';
import Dropdown, { DropdownButton, DropdownItem } from '@components/atoms/Dropdown';
import { DropdownItemList } from '@components/atoms/Dropdown/Dropdown';
import { useI18next } from "gatsby-plugin-react-i18next";

const StyledDDButton = styled(DropdownButton)`
    ${mediaQueries.tablet} {
        margin-left: 25px;
    }

    ${({ theme }) =>
        theme.mode === ColorMode.light
            ? `
                background-color: ${theme.colors.light.grey};
                color: ${theme.colors.light.brandBlack};

                &:hover, &[data-active] {
                    border: 1px solid ${theme.colors.light.brandAccent};
                    background-color: ${theme.colors.commons.white};
                }
    `
            : `
                background-color: ${theme.colors.dark.eclipseLight};
                color: ${theme.colors.commons.white};

                &:hover, &[data-active] {
                    border: 1px solid ${theme.colors.dark.brandAccentNight};
                }
            `};
`;

const FlagContainer = styled.div`
    align-items: center;
    display: flex;
`;

const FlagField = ({ value, label }: { value: string; label: string }): ReactElement | null => (
    <FlagContainer as="span">
        <CountryFlag locale={value} mr="xs" />
        {label}
    </FlagContainer>
);

type LanguageOption = {
    label: string;
    link: string;
    flag: string;
};

export const LANGUAGE_COOKIE = 'lang';

const LanguageDropdown = () => {
    const { changeLanguage, language } = useI18next();
    const { i18n } = usePageContext();
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        supportedLanguages
                    }
                }
            }
        `,
    );
    const options = site.siteMetadata.supportedLanguages.map((option: string) => ({
        label: option.toUpperCase(),
        link: option,
        flag: option === 'en' ? 'US' : option.toUpperCase(),
    }));
    const currentLang = options.find((option: LanguageOption) => option.link === language);

    const handleLangChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
                              lang: string) => {
        e.preventDefault();

        changeLanguage(lang);
    };

    return (
        <Dropdown>
            <StyledDDButton>
                <FlagField value={currentLang.flag} label={currentLang.label} />
            </StyledDDButton>
            <DropdownItemList>
                {options.map((lang: any) => (
                    <a
                        key={lang.link}
                        href={`${lang.link !== 'en' ? `/${lang.link}` : ''}${i18n.originalPath}`}
                        onClick={(e) => handleLangChange(e, lang.link)}
                        >
                        <DropdownItem as="div" >
                            <FlagField value={lang.flag} label={lang.label} />
                        </DropdownItem>
                    </a>
                ))}
            </DropdownItemList>
        </Dropdown>
    );
};

export default LanguageDropdown;
