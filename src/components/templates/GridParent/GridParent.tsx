import styled from 'styled-components';
import { grid, GridProps } from 'styled-system';

const GridParent = styled.div<
    GridProps & { noGutter?: boolean; noGap?: boolean; aspectRatio?: number }
>`
    display: grid;
    grid-column-gap: ${({ noGap }) => (noGap ? 'unset' : '1rem')};
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    width: 100%;

    ${({ aspectRatio }) =>
        aspectRatio &&
        `
        aspect-ratio: ${aspectRatio};
  `}

    ${grid};
`;

export default GridParent;
