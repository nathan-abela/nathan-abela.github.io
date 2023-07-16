import styled from 'styled-components';

const StyledTechnologyIcons = styled.div`
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;

		@media screen and (max-width: 768px) {
			font-size: 32px;
		}

		@media screen and (max-width: 425px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.card {
		background-color: ${({ theme }) => theme.body};
		padding: 30px;
		cursor: pointer;
		border-radius: 12px;
		transition: all 0.35s ease-in-out 0s;
		-webkit-box-pack: start;
		justify-content: start;
	}

	.card:hover {
		// 0.2 opacity = 33
		box-shadow: ${({ theme }) => `0px 0px 50px ${theme.headline}33`};
	}

	.icon {
		display: flex;
		justify-content: center;
		color: ${({ theme }) => theme.headline};
	}

	.icon svg {
		height: 32px;
	}

	.icon a {
		color: ${({ theme }) => theme.headline};
	}

	// .tooltip {
	// 	position: relative;
	// 	display: inline-block;
	// }

	// .tooltip-text {
	// 	visibility: hidden;
	// 	width: 120px;
	// 	background-color: ${({ theme }) => theme.text};
	// 	color: ${({ theme }) => theme.body};
	// 	text-align: center;
	// 	padding: 4px 0;
	// 	border-radius: 6px;

	// 	// Tooltip Position
	// 	position: absolute;
	// 	top: -100%;
	// 	left: 50%;
	// 	transform: translateX(-50%);
	// 	opacity: 0;
	// 	transition: opacity 0.35s ease-in-out;
	// }

	// .icon:hover .tooltip-text {
	// 	visibility: visible;
	// 	opacity: 1;
	// }
`;

export { StyledTechnologyIcons };
