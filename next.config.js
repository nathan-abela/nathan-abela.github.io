// next.config.js

module.exports = {
	assetPrefix: process.env.NODE_ENV === 'production' ? '/nathan-abela.github.io' : '',
	basePath: process.env.NODE_ENV === 'production' ? '/nathan-abela.github.io' : '',
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
