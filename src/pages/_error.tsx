import styled from 'styled-components';

import { SeoHead } from 'Atoms/SeoHead';

function Error({ statusCode }: { statusCode: number }) {
	let errorMessage = '';

	switch (statusCode) {
		case 400:
			errorMessage = 'Bad Request';
			break;
		case 401:
			errorMessage = 'Unauthorised';
			break;
		case 403:
			errorMessage = 'Forbidden';
			break;
		case 404:
			errorMessage = 'Page Not Found';
			break;
		case 405:
			errorMessage = 'Method Not Allowed';
			break;
		case 500:
			errorMessage = 'Internal Server Error';
			break;
		case 502:
			errorMessage = 'Bad Gateway';
			break;
		case 503:
			errorMessage = 'Service Unavailable';
			break;
		default:
			errorMessage = 'Internal Server Error';
			break;
	}

	return (
		<>
			<SeoHead
				title={`${statusCode} ${errorMessage} - Nathan Abela - Portfolio`}
				description="Error Page"
				meta={[
					{
						name: 'robots',
						content: 'noindex',
					},
				]}
			/>

			<Container>
				<h1>{statusCode}</h1>
				<Description>{errorMessage}.</Description>
			</Container>
		</>
	);
}

Error.getInitialProps = ({ res, err }: any) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	h1 {
		font-weight: normal;
	}
`;

const Description = styled.div`
	margin-left: 16px;
	padding: 16px 0 16px 16px;
	border-left: 1px solid ${({ theme }) => theme.text};
`;

export default Error;
