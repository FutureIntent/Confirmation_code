import { props } from '@styled-system/should-forward-prop';
import { getClampValue } from '@utils/helpers';
import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, variant as styledVariant } from 'styled-system';

import ButtonBase from '@components/atoms/ButtonBase';

export type ButtonVariants = 'primary' | 'secondary' | 'beta';
export type ButtonSizes = 'big' | 'small';

export interface ButtonProps extends SpaceProps, LayoutProps {
    variant?: ButtonVariants;
    btnSize?: ButtonSizes;
}

const variants = styledVariant({
    prop: 'variant',
    variants: {
        primary: {
            'color': 'commons.white',
            'backgroundColor': 'light.brandAccent',
            '&:hover': {
                backgroundColor: '#294FE5',
            },
            '&:disabled': {
                opacity: 0.32,
            },
        },
        secondary: {
            'color': 'light.brandAccent',
            'backgroundColor': 'transparent',
            'border': '1px solid #486DFF',
            '&:hover': {
                border: '1px solid #294FE5',
            },
            '&:disabled': {
                opacity: 0.32,
            },
        },
        beta: {
            'color': 'commons.white',
            'backgroundColor': 'light.success',
            'borderRadius': '6px',
            '&:hover': {
                border: '1px solid #294FE5',
            },
            '&:disabled': {
                opacity: 0.32,
            },
        },
    },
});

const btnSize = styledVariant({
    prop: 'btnSize',
    variants: {
        big: {
            padding: '15px 20px',
        },
        small: {
            padding: `${getClampValue('5px', '12px')} ${getClampValue('10px', '17px')}`,
        },
    },
});

const Button = styled(ButtonBase)
    .withConfig({
        shouldForwardProp: (prop) => ![...props, 'width', 'btnSize'].includes(String(prop)),
    })
    .attrs((bProps: ButtonProps) => ({
        variant: bProps.variant || 'primary',
        btnSize: bProps.btnSize || 'big',
    }))<ButtonProps>`
    flex-shrink: 0;
    white-space: nowrap;
    ${variants};
    ${btnSize};
    ${space};
    ${layout};

    border-radius: ${({ theme }) => theme.space.xs};
`;

export default Button;
