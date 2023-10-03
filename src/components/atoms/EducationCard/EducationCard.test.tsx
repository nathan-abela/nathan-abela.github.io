import { render } from '@testing-library/react';

import { EducationCard } from './EducationCard';

describe('Education Card', () => {
	it('renders education card correctly', () => {
		const { container } = render(
			<EducationCard
				education={{
					institute: 'Malta College for Arts, Science and Technology (MCAST)',
					website: 'https://mcast.edu.mt',
					location: 'Paola, Malta',
					course: 'Bachelor of Science (Honours) in Software Development',
					startDate: '2021',
					endDate: '2024',
					description:
						'Focuses on creating software applications using formal design patterns, and solving complex real-world problems using formal methodologies. Includes units such as secure software development, server-side and client-side scripting, discrete mathematics, and other similar modules.',
					bullets: [],
					technologies: [
						'JavaScript',
						'Angular',
						'Bootstrap',
						'Java',
						'Selenium',
						'RESTful API',
						'C#',
						'ASP.NET Core',
						'Android Studio',
						'Firebase',
						'Amazon Web Services',
						'Algorithms',
						'Data Structures',
						'OWASP ZAP',
						'C',
						'Python',
						'Tensorflow',
						'LaTeX',
						'SQL',
						'SQL Data Modeller',
						'SQL Server Management Studio',
						'Power BI',
						'CakePHP',
						'PHP',
						'XAMPP',
					],
				}}
			></EducationCard>
		);
		expect(container).toMatchSnapshot();
	});
});
