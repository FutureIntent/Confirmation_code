import styled from 'styled-components';
import { space, SpaceProps, textAlign, TextAlignProps } from 'styled-system';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import { fontsConfig } from '@components/atoms/Typography/Typography';

const Terms = styled.p<TextAlignProps & SpaceProps>`
    ${{ ...fontsConfig.caption }};
    color: ${({ theme }) =>
        theme.mode === ColorMode.light ? theme.colors.light.darkGrey : theme.colors.dark.lightGrey};
    ${textAlign};
    ${space};

    span {
        color: ${({ theme }) => theme.colors.light.brandAccent};
    }
`;

export default Terms;
