import styled from 'styled-components';
import {
    alignContent,
    alignItems,
    borders,
    color,
    compose,
    display,
    flexDirection,
    grid,
    justifyContent,
    justifyItems,
    margin,
    padding,
    textAlign,
    layout,
    AlignContentProps,
    AlignItemsProps,
    BordersProps,
    ColorProps,
    DisplayProps,
    FlexDirectionProps,
    GridProps,
    JustifyContentProps,
    JustifyItemsProps,
    LayoutProps,
    MarginProps,
    PaddingProps,
    TextAlignProps
} from 'styled-system';

export type ContainerProps = AlignContentProps &
    AlignItemsProps &
    BordersProps &
    ColorProps &
    DisplayProps &
    FlexDirectionProps &
    GridProps &
    JustifyContentProps &
    JustifyItemsProps &
    LayoutProps &
    MarginProps &
    PaddingProps &
    TextAlignProps;

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    ${compose(
    alignContent,
    alignItems,
    borders,
    color,
    display,
    flexDirection,
    grid,
    justifyContent,
    justifyItems,
    layout,
    margin,
    padding,
    textAlign
)};
`;

export default Container;
