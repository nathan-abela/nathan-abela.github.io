import { Property } from 'csstype';
import styled, { css } from 'styled-components';
import {
    background,
    color,
    compose,
    fontSize,
    fontWeight,
    layout,
    opacity,
    system,
    BackgroundProps,
    ColorProps,
    FontSizeProps,
    FontWeightProps,
    LayoutProps,
    OpacityProps
} from 'styled-system';

const textTransform = system({
    textTransform: true,
    textDecoration: true,
});

interface TextTransformProps {
    textTransform?: Property.TextTransform;
    textDecoration?: Property.TextDecoration;
}

interface Props {
    isSelected?: boolean;
}

type LinkProps = BackgroundProps &
    ColorProps &
    FontSizeProps &
    FontWeightProps &
    LayoutProps &
    OpacityProps &
    Props &
    TextTransformProps;

const Link = styled.a<LinkProps>`
    padding: 0;

    cursor: pointer;
    text-decoration: none;

    color: inherit;
    border-bottom: none;

    ${compose(
    background,
    color,
    fontSize,
    fontWeight,
    layout,
    opacity,
    textTransform
)}

    ${({ isSelected }) =>
        isSelected &&
        css`
            padding: 10px 20px;

            opacity: 0.9;
            color: white;
            border-radius: 25px;
            background: black;
        `}

    :hover {
        opacity: 1;
    }
`;

export default Link;
