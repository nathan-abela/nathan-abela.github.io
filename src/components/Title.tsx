import styled from 'styled-components';
import {
    color,
    compose,
    fontSize,
    fontWeight,
    margin,
    textAlign,
    ColorProps,
    FontSizeProps,
    FontWeightProps,
    MarginProps,
    TextAlignProps
} from 'styled-system';

type TitleProps = ColorProps &
    FontSizeProps &
    FontWeightProps &
    MarginProps &
    TextAlignProps;

const Title = styled.h1<TitleProps>`
    font-size: 4rem;
    line-height: 1.15;

    margin: 10px 0;

    text-align: center;

    ${compose(color, fontSize, fontWeight, margin, textAlign)}
`;

export default Title;
