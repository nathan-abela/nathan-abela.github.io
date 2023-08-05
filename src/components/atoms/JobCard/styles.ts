import styled from 'styled-components';

const StyledJobCard = styled.div`
	margin-bottom: 40px;
`;

const Flex = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 8px;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export { Flex, StyledJobCard };
