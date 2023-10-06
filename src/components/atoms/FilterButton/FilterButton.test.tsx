import { render } from '@testing-library/react';

import { FilterButton } from './FilterButton';

describe('Filter Button', () => {
	it('renders filter button with isActive is true', () => {
		const { container } = render(
			<FilterButton onClick={jest.fn} isActive={true}>
				Filter button text
			</FilterButton>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders filter button with isActive is false', () => {
		const { container } = render(
			<FilterButton onClick={jest.fn} isActive={false}>
				Filter button text
			</FilterButton>
		);

		expect(container).toMatchSnapshot();
	});
});
