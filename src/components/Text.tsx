import styled from 'styled-components';
import {
    compose,
    display,
    fontSize,
    fontWeight,
    layout,
    margin,
    textAlign,
    typography,
    DisplayProps,
    FontSizeProps,
    FontWeightProps,
    LayoutProps,
    MarginProps,
    TextAlignProps,
    TypographyProps
} from 'styled-system';

type TextProps = DisplayProps &
    FontSizeProps &
    FontWeightProps &
    LayoutProps &
    MarginProps &
    TextAlignProps &
    TypographyProps;

const Text = styled.p<TextProps>`
    font-size: 1.125rem;
    line-height: 160%;

    margin: 0.75rem 0;

    white-space: pre-wrap;
    letter-spacing: 0.02em;

    color: rgba(0, 0, 0, 0.7);

    ${compose(
    display,
    fontSize,
    fontWeight,
    layout,
    margin,
    textAlign,
    typography
)}
`;

export default Text;
