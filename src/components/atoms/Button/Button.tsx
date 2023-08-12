import { FC, ReactNode } from 'react';
import { StyledButton, StyledLink } from './styles';

export interface ButtonProps {
	href?: string;
	onClick?: (...args: any) => void;
	target?: '_blank' | '_self' | '_parent';
	children?: ReactNode;
	transparent?: boolean;
}

const Button: FC<ButtonProps> = ({ children, href, target, onClick, transparent }) => {
	if (href) {
		return (
			<StyledLink href={href} target={target} transparent={transparent}>
				{children}
			</StyledLink>
		);
	}

	return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export { Button };
