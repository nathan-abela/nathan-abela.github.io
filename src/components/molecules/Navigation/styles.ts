import styled from 'styled-components';

const StyledNavigation = styled.nav``;

const List = styled.ul`
	display: flex;
	align-items: center;
	flex-direction: column;
	font-size: 32px;
	line-height: 2;
	font-weight: bold;

	// theme-toggle
	.desktop-only {
		display: none;
		padding-left: 16px;
	}

	& > li a {
		padding: 8px 16px;
		color: ${({ theme }) => theme.text};
		text-decoration: none;
		transition: 0.2s;

		&:hover {
			color: ${({ theme }) => theme.headline};
		}
	}

	@media screen and (min-width: 768px) {
		flex-direction: row;
		font-size: 16px;
		font-weight: normal;

		.desktop-only {
			display: block;
		}
	}
`;

export { StyledNavigation, List };
