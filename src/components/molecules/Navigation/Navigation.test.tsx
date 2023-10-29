import { render } from '@testing-library/react';

import { Navigation } from './Navigation';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch,
}));

describe('Navigation', () => {
	it('renders correctly', () => {
		const { container } = render(
			// eslint-disable-next-line prettier/prettier
			<Navigation />
		);
		expect(container).toMatchSnapshot();
	});
});
