import { render } from '@testing-library/react';

import { TechnologyIcons } from './TechnologyIcons';

describe('Technology Icons', () => {
	it('renders correctly', () => {
		const { container } = render(
			// eslint-disable-next-line prettier/prettier
			<TechnologyIcons />
		);
		expect(container).toMatchSnapshot();
	});
});
