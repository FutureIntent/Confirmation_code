import { SVGProps } from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';

import { Device } from '@theme/configs/breakpoints';

export type Size =
    | 'micro'
    | 'small'
    | 'small2'
    | 'medium'
    | 'medium2'
    | 'medium3'
    | 'large'
    | 'large2'
    | 'large3'
    | 'xl'
    | 'xxl'
    | 'xxxl'
    | 'fullWidth';
export type IconSize = Size | ({ _: Size } & { [key in Device]?: Size });

export interface IconProps extends Pick<SVGProps<SVGElement>, 'fill'> {
    size?: IconSize;
    viewBox?: string;
    filled?: boolean;
    color?: string;
}

const sizeVariant = variant({
    prop: 'size',
    variants: {
        micro: {
            width: '0.5rem',
            height: '0.5rem',
        },
        small: {
            width: '0.75rem',
            height: '0.75rem',
        },
        small2: {
            width: '1rem',
            height: '1rem',
        },
        medium: {
            width: '1.25rem',
            height: '1.25rem',
        },
        medium2: {
            width: '1.5rem',
            height: '1.5rem',
        },
        medium3: {
            width: '1.75rem',
            height: '1.75rem',
        },
        large: {
            width: '2rem',
            height: '2rem',
        },
        large2: {
            width: '2.25rem',
            height: '2.25rem',
        },
        large3: {
            width: '2.5rem',
            height: '2.5rem',
        },
        xl: {
            width: '3rem',
            height: '3rem',
        },
        xxl: {
            width: '4rem',
            height: '4rem',
        },
        xxxl: {
            width: '5rem',
            height: '5rem',
        },
        fullWidth: {
            width: '100%',
            height: '100%',
        },
    },
});

const Icon = styled.svg.attrs(
    ({ size = 'medium', viewBox = '0 0 24 24', filled = false, color }: IconProps) => ({
        size,
        viewBox,
        filled,
        color,
    }),
)<IconProps>`
    ${sizeVariant};

    ${({ color, filled }) =>
        color &&
        css`
            color: ${color};

            > path {
                ${filled && `fill: ${color}`};
            }
        `}
`;

export default Icon;
