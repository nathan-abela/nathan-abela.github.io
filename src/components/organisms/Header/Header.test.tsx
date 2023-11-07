import { render } from '@testing-library/react';

import { Header } from './Header';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch,
}));

describe('Header', () => {
	it('renders correctly', () => {
		const { container } = render(
			// eslint-disable-next-line prettier/prettier
			<Header />
		);
		expect(container).toMatchSnapshot();
	});
});
