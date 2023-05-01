import styled from "styled-components";
import { ColorMode } from "@providers/ColorModeProvider/ColorModeContext";
import {space, SpaceProps} from "styled-system";

const ExternalLinkWrapper = styled.div<SpaceProps>`
    align-items: center;
    display: flex;
    ${space};

    svg {
        transform: rotate(90deg);
    }

    path {
        stroke: ${({ theme }) => theme.mode === ColorMode.light ? theme.colors.light.brandAccent : theme.colors.dark.brandAccentNight};
    }
`;

export default ExternalLinkWrapper;
