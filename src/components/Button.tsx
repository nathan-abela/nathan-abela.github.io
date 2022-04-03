import styled, { css, keyframes } from 'styled-components';
import {
    color,
    compose,
    layout,
    padding,
    variant,
    ColorProps,
    LayoutProps,
    PaddingProps
} from 'styled-system';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'animated';
}

const animation = keyframes`
    0% {
        background-position: 0 50%;
    }

    20% {
        background-position: 35% 80%;
    }

    40% {
        background-position: 100% 50%;
    }

    60% {
        background-position: 70% 0;
    }

    80% {
        background-position: 70% 0;
    }

    100% {
        background-position: 0 50%;
    }
`;

const Button = styled.button<
    ButtonProps & ColorProps & LayoutProps & PaddingProps
    >`
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5rem;

    display: inline-block;
    align-items: center;
    justify-content: center;

    margin: 0;
    padding: 20px 50px;

    cursor: pointer;
    transition: ease-in-out 0.15s;

    color: white;
    border: none;
    border-radius: 12px;
    outline: 0;

    ${({ variant }) =>
        variant === 'animated' &&
        css`
            animation: ${animation} 2s linear infinite;
        `}
    ${compose(padding, color, layout)}

    ${variant({
            variants: {
                animated: {
                    background:
                        'linear-gradient(200deg, rgb(255, 95, 109),rgb(255, 195, 113))',
                },
                primary: {
                    color: 'white',
                    backgroundColor: '#050505',
                    '&:hover': {
                        color: 'white',
                        backgroundColor: 'black',
                        transform: 'scale(1.05)',
                    },
                },
                secondary: {
                    color: 'black',
                    backgroundColor: '#f5f5f5',
                    '&:hover': {
                        color: 'white',
                        backgroundColor: 'black',
                        transform: 'scale(1.05)',
                    },
                },
            },
        })};
`;

Button.defaultProps = {
    variant: 'primary',
};

export default Button;
