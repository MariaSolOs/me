// eslint-disable-next-line
import withRoutes from 'nextjs-routes/config';

/**
 * @type {import('next').NextConfig}
 */
const config = {
    reactStrictMode: true,

    compiler: {
        styledComponents: true
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com'
            },
            {
                protocol: 'https',
                hostname: 'rustacean.net'
            }
        ]
    },

    webpack(config) {
        // For importing my CV
        config.module.rules.push({
            test: /\.(pdf)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/chunks/[path][name].[hash][ext]'
            }
        });

        return config;
    }
};

export default withRoutes({ outDir: 'types' })(config);
