import styled from "styled-components";
import { layout, LayoutProps, position, PositionProps } from "styled-system";

const FloatingSquareWrapper = styled.div<PositionProps & LayoutProps>`
    animation: float-animation 4s alternate ease-in-out infinite;
    aspect-ratio: 1 / 1;
    position: absolute;
    width: 200px;

    ${layout};
    ${position};

    @keyframes float-animation {
        from {
            transform: rotate(0deg) translate(0.5%, 1%) rotate(0deg);
        }
        to {
            transform: rotate(360deg) translate(0.5%, 1%) rotate(-360deg);
        }
    }

    z-index: -1;
`;

export default FloatingSquareWrapper;
