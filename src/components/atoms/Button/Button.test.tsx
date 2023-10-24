import { render } from '@testing-library/react';

import { Button } from '../Button';

describe('Button', () => {
	it('renders with link correctly', () => {
		const { container } = render(
			<Button href="/url" target="_blank">
				Button text
			</Button>
		);
		expect(container).toMatchSnapshot();
	});

	it('renders correctly', () => {
		const { container } = render(
			// eslint-disable-next-line prettier/prettier
			<Button onClick={jest.fn}>Button text</Button>
		);
		expect(container).toMatchSnapshot();
	});
});
