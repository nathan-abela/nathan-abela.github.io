import { render } from '@testing-library/react';

import { SeoHead } from './SeoHead';

describe('SEO Head', () => {
	it('renders seo head correctly', () => {
		const { container } = render(
			// eslint-disable-next-line prettier/prettier
			<SeoHead title="Page title" description="Page description" />
		);
		expect(container).toMatchSnapshot();
	});
});
