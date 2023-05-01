import {
    Menu,
    MenuButton,
    MenuButtonProps,
    MenuItem,
    MenuItemProps,
    MenuList,
} from '@chakra-ui/menu';
import styled from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import { fontsConfig } from '@components/atoms/Typography/Typography';

const Dropdown = styled(Menu)`
    border-radius: ${({ theme }) => theme.space['2xs']};
`;

export const DropdownButton = styled(MenuButton)<MenuButtonProps>`
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.space['2xs']};
    ${{ ...fontsConfig.accent }};
    padding: 5px 10px;
`;

export const DropdownItemList = styled(MenuList)`
    border: 1px solid ${({ theme }) => theme.colors.light.brandAccent};
    border-radius: ${({ theme }) => theme.space['2xs']};
    overflow: hidden;
    position: relative;
    z-index: 799;

    a {
        cursor: pointer;
    }
`;

export const DropdownItem = styled(MenuItem)<MenuItemProps>`
    background-color: ${({ theme }) => theme.colors.commons.white};
    ${{ ...fontsConfig.paragraph }};
    border: 0;
    min-width: 190px;
    padding: 7px 16px;

    &:hover {
        background-color: ${({ theme }) =>
            theme.mode === ColorMode.light
                ? theme.colors.light.brandAccent
                : theme.colors.dark.brandAccentNight};
        color: ${({ theme }) => theme.colors.commons.white};
    }
`;

export default Dropdown;
