import React from 'react';

import styled, { css } from 'styled-components';
import {
    BordersProps,
    FlexboxProps,
    GridGapProps,
    GridProps as StyledGridProps,
    LayoutProps,
    SpaceProps,
    borders,
    compose,
    flexbox,
    grid,
    gridGap,
    layout,
    space
} from 'styled-system';

export type GridProps = BordersProps &
    FlexboxProps &
    GridGapProps &
    LayoutProps &
    SpaceProps &
    StyledGridProps;

const Grid = styled.div<GridProps>`
    display: grid;
    align-items: center;
    justify-content: flex-end;

    grid-template-columns:
        ${({ children }) =>
        children &&
        css`repeat(${React.Children.toArray(children).length}, auto);`}

        ${compose(
            borders,
            flexbox,
            grid,
            gridGap,
            layout,
            space
        )};
`;

Grid.defaultProps = {};

export default Grid;