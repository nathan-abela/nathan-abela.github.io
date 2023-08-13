import styled from 'styled-components';

interface StyledFilterButtonProps {
	isActive: boolean;
}

const StyledFilterButton = styled.button<StyledFilterButtonProps>`
	padding: 8px 16px;
	margin: 0 8px 8px 0;
	border: 1px solid ${({ isActive, theme }) => (isActive ? theme.primary : theme.text)};
	border-radius: 4px;
	background-color: ${({ isActive, theme }) => (isActive ? theme.primary : theme.body)};
	color: ${({ isActive, theme }) => (isActive ? theme.body : theme.text)};
	cursor: pointer;
	transition: background-color 0.3s ease, color 0.3s ease;

	&:hover {
		background-color: ${({ theme }) => `${theme.primary}F2`};
		color: ${({ theme }) => theme.headline};
	}

	@media screen and (max-width: 425px) {
		font-size: 14px;
	}
`;

export { StyledFilterButton };
