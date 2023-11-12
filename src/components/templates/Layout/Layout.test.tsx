import { render } from '@testing-library/react';

import { Layout } from './Layout';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: () => mockDispatch,
}));

describe('Layout', () => {
	it('renders correctly', () => {
		const { container } = render(
			// eslint-disable-next-line prettier/prettier
			<Layout>Test Content</Layout>
		);
		expect(container).toMatchSnapshot();
	});
});
