// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

module.exports = {
	assetPrefix: isGithubActions ? '/nathan-abela.github.io/' : '',
	basePath: isGithubActions ? '/nathan-abela.github.io' : '',
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