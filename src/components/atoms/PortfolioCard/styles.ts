import styled from 'styled-components';

const StyledPortfolioCard = styled.article`
	margin-bottom: 48px;
	flex-direction: column;

	&:hover img {
		transform: scale(1.04);
	}

	a {
		color: ${({ theme }) => theme.headline};
		text-decoration: none;
	}

	span {
		border-radius: 4px;
	}

	img {
		transition: transform 0.3s ease;
	}

	h1 {
		margin: 0;
	}

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;

		&:nth-of-type(odd) {
			flex-direction: row;

			.details {
				padding-left: 24px;
			}
		}

		&:nth-of-type(even) {
			.details {
				padding-right: 24px;
			}
		}

		& > * {
			width: 50%;
		}
	}
`;

export { StyledPortfolioCard };
