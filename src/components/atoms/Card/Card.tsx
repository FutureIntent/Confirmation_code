import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, variant } from 'styled-system';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import { Theme } from '@theme/configs';

interface CardProps extends LayoutProps, SpaceProps {
    cardSize: 'small' | 'big';
    variant: 'light' | 'dark' | 'grey';
}

const sizeVariant = variant({
    prop: 'cardSize',
    variants: {
        small: {
            padding: '25px',
        },
        big: {
            padding: '60px 40px',
        },
    },
});

const colorsVariant = variant({
    prop: 'variant',
    variants: {
        light: {
            backgroundColor: (theme: Theme) =>
                theme.mode === ColorMode.light
                    ? theme.colors.commons.white
                    : theme.colors.dark.eclipseMedium,
        },
        grey: {
            backgroundColor: (theme: Theme) =>
                theme.mode === ColorMode.light
                    ? theme.colors.light.grey
                    : theme.colors.dark.eclipseMedium,
        },
        dark: {
            backgroundColor: (theme: Theme) =>
                theme.mode === ColorMode.light ? '#0A0F24' : theme.colors.dark.eclipseMedium,
        },
    },
});

const Card = styled.div.attrs((props: CardProps) => ({
    cardSize: props.cardSize || 'small',
    variant: props.variant || 'light',
}))<CardProps>`
    border-radius: ${({ theme }) => theme.space['2xs']};
    overflow:hidden;

    position: relative;
    ${colorsVariant};
    ${sizeVariant};
    ${space};
    ${layout};
`;

export default Card;
