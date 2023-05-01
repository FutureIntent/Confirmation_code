import { props as defProps } from '@styled-system/should-forward-prop';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { layout, space, variant as styledVariant } from 'styled-system';

import { ButtonProps } from '@components/atoms/Button/Button';
import { Link } from "gatsby-plugin-react-i18next";

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

const StyledLink = styled(Link)
    .withConfig({
        shouldForwardProp: (prop) => ![...defProps, 'variants'].includes(String(prop)),
    })
    .attrs((props: ButtonProps) => ({
        variant: props.variant || 'primary',
    }))`
    border-radius: ${({ theme }) => theme.space.xs};
    flex-shrink: 0;
    padding: 15px 20px;
    ${variants};
    ${space};
    ${layout};

    white-space: nowrap;
`;

const LinkAsButton = ({
    to,
    variant = 'primary',
    children,
        ...rest
}: {
    to: string;
    variant?: 'primary' | 'secondary' | 'beta';
    children: ReactNode;
}): ReactElement => (
    <StyledLink variant={variant} to={`${to}`} {...rest}>
        {children}
    </StyledLink>
    );

export default LinkAsButton;
