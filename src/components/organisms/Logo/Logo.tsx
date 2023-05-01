import { props } from '@styled-system/should-forward-prop';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import { Size } from '@components/atoms/Icon/Icon';

import LogoAbstract from '@components/molecules/Icons/LogoAbstract';
import LogoText from '@components/molecules/Icons/LogoText';

const LogoWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-shrink: 0;
    height: 100%;
    max-width: 140px;

    svg:first-of-type {
        padding-right: 7px;
    }
`;

const StyledLogoText = styled(LogoText).withConfig({
    shouldForwardProp: (prop) => ![...props, 'isOnDark'].includes(String(prop)),
})<{ isOnDark: boolean }>`
    display: none;
    width: 100%;

    ${({ isOnDark, theme }) =>
        isOnDark &&
        `
        max-width: 99px;
        display: block;

        path {
            fill: ${theme.colors.dark.white};
        }
  `}

    ${mediaQueries.tabletL} {
        display: block;
        max-width: 99px;
    }
`;

const Logo = ({ isOnDark = false, size = 'large3' }: { isOnDark?: boolean; size?: Size }) => (
    <LogoWrapper>
        <LogoAbstract size={size} />
        <div>
            <StyledLogoText size="fullWidth" isOnDark={isOnDark} />
        </div>
    </LogoWrapper>
);

export default Logo;
