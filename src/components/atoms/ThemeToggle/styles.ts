import styled from 'styled-components';

const StyledThemeToggle = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	border: 1px solid ${({ theme }) => theme.text};
	color: ${({ theme }) => theme.text};
	border-radius: 16px;
	width: 32px;
	height: 32px;
	transition: 0.2s;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.headline};
	}
`;

export { StyledThemeToggle };
