import { FC } from 'react';
import { StyledContainer } from './styles';

interface ContainerProps {
	children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
	return <StyledContainer>{children}</StyledContainer>;
};

export { Container };
