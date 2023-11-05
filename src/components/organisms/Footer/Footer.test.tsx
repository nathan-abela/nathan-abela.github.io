import { render } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
	it('renders correctly', () => {
		const { container } = render(
			// eslint-disable-next-line prettier/prettier
			<Footer />
		);
		expect(container).toMatchSnapshot();
	});
});
