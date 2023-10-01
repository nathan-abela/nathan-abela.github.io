import { render } from '@testing-library/react';

import { Container } from './Container';

describe('Container', () => {
	it('renders container correctly', () => {
		const { container } = render(
			// eslint-disable-next-line prettier/prettier
			<Container>Page Content</Container>
		);
		expect(container).toMatchSnapshot();
	});
});
