import { render } from '@testing-library/react';

import { SocialIcons } from './SocialIcons';

describe('Social Icons', () => {
	it('renders correctly', () => {
		const { container } = render(
			// eslint-disable-next-line prettier/prettier
			<SocialIcons />
		);
		expect(container).toMatchSnapshot();
	});
});
