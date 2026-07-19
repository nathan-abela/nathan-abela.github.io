/** Whether the site is deployed to a custom domain (true) or GitHub Pages (false). */
const USE_CUSTOM_DOMAIN = false;

/** The custom domain URL (used when `USE_CUSTOM_DOMAIN` is true). */
const CUSTOM_DOMAIN_URL = '';

/** The GitHub Pages URL (used when `USE_CUSTOM_DOMAIN` is false). */
const GITHUB_PAGES_URL = 'https://nathan-abela.github.io';

export const siteConfig = {
	name: 'Nathan Abela',
	jobTitle: 'Software Engineer',
	description:
		'Software Engineer from Malta building web applications with TypeScript, Stencil.js, and Next.js.',
	url: USE_CUSTOM_DOMAIN && CUSTOM_DOMAIN_URL ? CUSTOM_DOMAIN_URL : GITHUB_PAGES_URL,
	repo: 'https://github.com/nathan-abela/nathan-abela.github.io',
	links: {
		github: 'https://github.com/nathan-abela',
		linkedin: 'https://www.linkedin.com/in/nathan-abela',
		youtube: 'https://www.youtube.com/@nathanabela',
		email: 'nathanabela7@gmail.com',
	},
};
