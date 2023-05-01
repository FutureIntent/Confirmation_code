import styled from 'styled-components';
import {grid, space, GridProps, SpaceProps, display, DisplayProps} from 'styled-system';

export type GridChildProps = GridProps & SpaceProps;

const GridChild = styled.div<GridChildProps & DisplayProps>`
    ${display};
    ${grid};
    ${space};

    max-width: 100%;
    position: relative;
`;

export default GridChild;
