import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const education = [
		{
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
				// Frontend Development
				'JavaScript',
				'Angular',
				'Bootstrap',

				// Java
				'Java',
				'Selenium',

				// Backend Development
				'RESTful API',
				'C#',
				'ASP.NET Core',

				// Mobile App Development
				'Android Studio',
				'Firebase',

				// Cloud Services
				'Amazon Web Services',

				// Algorithms and Data Structures
				'Algorithms',
				'Data Structures',

				// Security Testing
				'OWASP ZAP',

				// Programming Languages
				'C',
				'Python',
				'Tensorflow',

				// Document Preparation
				'LaTeX',

				// Database
				'SQL',
				'SQL Data Modeller',
				'SQL Server Management Studio',

				// Data Visualization
				'Power BI',

				// Web Development (PHP Stack)
				'CakePHP',
				'PHP',
				'XAMPP',
			],
		},
		{
			institute: 'Malta College for Arts, Science and Technology (MCAST)',
			website: 'https://mcast.edu.mt',
			location: 'Paola, Malta',
			course: 'Advanced Diploma in IT (Multimedia Software Development)',
			startDate: '2019',
			endDate: '2021',
			description:
				'Focuses on software development skills along with the necessary knowledge for multimedia artefact development, manipulation and integration. Includes units such as game development, mobile application development, database design, website development, and other similar modules.',
			bullets: [],
			technologies: [
				// Python
				'Python',
				'OpenCV',

				// Internet of Things
				'ThingSpeak IoT',

				// Electronics
				'Fritzing',
				'Raspberry Pi',

				// Game Development
				'Construct 2',
				'Lua',
				'Unity',

				// Mobile App Development
				'Cordova',
				'Ionic',

				// Frontend Development
				'HTML',
				'CSS',
				'JavaScript',
				'jQuery',

				// Backend Development
				'C#',
				'ASP.NET Core',

				// SQL
				'SQL',
				'SQL Data Modeller',
				'SQL Server Management Studio',

				// Mathematics and Statistics
				'Statistics',
				'Game Theory',

				// Networking
				'Cisco Packet Tracer',
				'Wireshark',

				// Graphic Design
				'Adobe Illustrator',
				'Adobe Photoshop',
				'Adobe After Effects',
				'Adobe Premier Pro',

				// Audio Editing
				'Audacity',

				// Virtual Reality
				'WebVR',
				'A-Frame',
			],
		},
		{
			institute: 'Giovanni Curmi Higher Secondary School (GCHSS)',
			website: 'http://gchss.edu.mt',
			location: 'Naxxar, Malta',
			course: 'Post Secondary (MATSEC)',
			startDate: '2016',
			endDate: '2019',
			description: '',
			bullets: ['A Levels - Computing, Pure Maths', 'Intermediates - Physics, Marketing, English, System Of Knowledge'],
			technologies: [],
		},
		{
			institute: 'St Aloysius College',
			website: 'https://staloysius.edu.mt',
			location: 'Birkirkara, Malta',
			course: 'Secondary School',
			startDate: '2011',
			endDate: '2016',
			description: '',
			bullets: [
				'O Levels - Maltese, English, Maths, Religion, Physics, Computer Studies, Graphical Communication, and ECDL Standard Level',
			],
			technologies: [],
		},
	];

	res.status(200).json({ education });
};
