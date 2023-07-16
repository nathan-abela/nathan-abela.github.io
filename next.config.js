// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = './';
let basePath = '';

if (isGithubActions) {
	const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

	assetPrefix = `/${repo}/`;
	basePath = `/${repo}`;
}

module.exports = {
	assetPrefix: assetPrefix,
	basePath: basePath,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg?$/,
			oneOf: [
				{
					use: [
						{
							loader: '@svgr/webpack',
							options: {
								prettier: false,
								svgo: true,
								svgoConfig: {
									plugins: [{ removeViewBox: false }],
								},
								titleProp: true,
							},
						},
					],
					issuer: {
						and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
					},
				},
			],
		});

		return config;
	},
};
