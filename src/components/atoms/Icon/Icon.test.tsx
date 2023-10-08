import { render } from '@testing-library/react';

import { Icon } from './Icon';

const icons = ['GITHUB', 'LINKEDIN', 'YOUTUBE', 'EMAIL'];

describe('Icon', () => {
	icons.forEach((icon) => {
		it(`renders ${icon} icon correctly`, () => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const { container } = render(<Icon icon={icon} />);

			expect(container).toMatchSnapshot();
		});
	});
});
