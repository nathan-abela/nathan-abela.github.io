import { render } from '@testing-library/react';

import { MobileNavigation } from './MobileNavigation';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch,
}));

describe('Mobile Navigation', () => {
	it('renders mobile navigation correctly', () => {
		const { container } = render(
			// eslint-disable-next-line prettier/prettier
			<MobileNavigation />
		);
		expect(container).toMatchSnapshot();
	});
});
