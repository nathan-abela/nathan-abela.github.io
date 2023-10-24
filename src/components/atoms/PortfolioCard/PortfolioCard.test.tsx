import { render } from '@testing-library/react';

import { PortfolioCard } from './PortfolioCard';

describe('Portfolio Card', () => {
	it('renders correctly', () => {
		const { container } = render(
			<PortfolioCard
				item={{
					title: 'Sample Project',
					slug: 'sample-project',
					link: 'https://example.com',
					type: 'Web Development',
					technologies: ['HTML', 'CSS', 'JavaScript'],
					content:
						'This is a sample project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				}}
			></PortfolioCard>
		);
		expect(container).toMatchSnapshot();
	});
});
