import styled from 'styled-components';

const StyledSocialIcons = styled.ul`
	display: flex;

	li {
		width: 24px;
		margin: 0 8px;
		display: flex;
		justify-content: center;
	}

	a {
		color: ${({ theme }) => theme.text};
		text-decoration: none;
		transition: 0.2s;

		&:hover {
			color: ${({ theme }) => theme.headline};
		}
	}

	@media screen and (min-width: 768px) {
		li {
			margin-left: 16px;
		}
	}
`;

export { StyledSocialIcons };
