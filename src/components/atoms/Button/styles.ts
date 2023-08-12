import styled from 'styled-components';

const StyledButton = styled.button`
	display: inline-block;
	margin: 32px 16px 0;
	border: 2px solid transparent;
	color: ${({ theme }) => theme.text};
	padding: 8px 48px;
	border-radius: 4px;
	background: transparent;
`;

const StyledLink = styled.a<{ transparent?: boolean }>`
	display: inline-block;
	margin: 32px 16px 0 0;
	border: 2px solid transparent;
	color: ${({ theme, transparent }) => (transparent ? theme.text : theme.body)};
	padding: 8px 48px;
	border-radius: 4px;
	background: ${({ theme, transparent }) => (transparent ? 'transparent' : theme.primary)};
	text-decoration: none;
	font-weight: 600;

	&:hover {
		background: ${({ theme }) => `${theme.primary}F2`};
	}
`;

export { StyledButton, StyledLink };
