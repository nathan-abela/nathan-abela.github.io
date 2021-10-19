module.exports = {
    target: 'serverless',
    reactStrictMode: false,

    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }

        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });

        return config;
    },
};
