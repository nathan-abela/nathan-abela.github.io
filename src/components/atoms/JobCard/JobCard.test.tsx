import { render } from '@testing-library/react';

import { JobCard } from './JobCard';

describe('Job Card', () => {
	it('renders correctly', () => {
		const { container } = render(
			<JobCard
				job={{
					company: 'Acme Corporation',
					website: 'https://wikipedia.org/wiki/Acme_Corporation',
					location: 'Valletta, Malta',
					jobTitle: 'Software Engineer',
					startDate: 'January 2020',
					endDate: 'January 2022',
					description: 'Worked on a variety of software projects.',
					bullets: [
						'Developed and maintained web applications using Angular.',
						'Collaborated with cross-functional teams to deliver high-quality software.',
						'Participated in code reviews and provided constructive feedback.',
					],
					technologies: ['JavaScript', 'TypeScript', 'Node.js', 'Angular', 'HTML', 'CSS'],
				}}
			></JobCard>
		);
		expect(container).toMatchSnapshot();
	});
});
