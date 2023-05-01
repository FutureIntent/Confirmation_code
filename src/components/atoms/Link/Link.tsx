import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { layout, space } from 'styled-system';

import { Link as GatsbyLink} from "gatsby-plugin-react-i18next";

const StyledLink = styled(GatsbyLink)`
    border-radius: ${({ theme }) => theme.space.xs};
    flex-shrink: 0;
    ${space};
    ${layout};

    white-space: nowrap;
`;

const Link = ({
    to,
    children,
    ariaLabel,
        target,
        ...rest
}: {
    to: string;
    children: ReactNode;
    ariaLabel?: string;
    target?: string;
}): ReactElement => (
    <StyledLink to={`${to}`} target={target} aria-label={ariaLabel} {...rest}>
        {children}
    </StyledLink>
    );

export default Link;
