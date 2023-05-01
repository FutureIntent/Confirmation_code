import styled from "styled-components";
import {  BorderRadiusProps } from "styled-system";

interface IFloatingSquareProps extends BorderRadiusProps {
    rotate?: number;
}

const FloatingSquare = styled.div.attrs((props: IFloatingSquareProps) => ({
    rotate: props.rotate || 60,
    ...props,
}))<IFloatingSquareProps>`
    background: ${({ theme }) => theme.colors.commons.white};
    border-radius: 40px;
    opacity: 0.05;
    padding: 50px;
    transform: rotate(${({ rotate }) => rotate}deg);
    width: 100%;

    &:after {
        aspect-ratio: 1 / 1;
        border: 2px solid #5e58f3;
        border-radius: 60px;
        content: '';
        display: block;
        margin: -70px;
    }
`;

export default FloatingSquare;
