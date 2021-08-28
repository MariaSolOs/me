const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    reactStrictMode: true,

    webpack(config, { dev, isServer }) {
        // For getting all Typescript errors
        if (dev && isServer) {
            config.plugins.push(new ForkTsCheckerWebpackPlugin());
        }

        config.module.rules.push({
            test: /\.(pdf)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/chunks/[path][name].[hash][ext]'
            }
        });

        return config;
    }
}
