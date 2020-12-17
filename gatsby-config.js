module.exports = {
    pathPrefix: "/me",
    plugins: [
        {
            resolve: `gatsby-plugin-styled-components`
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: ['Fugaz One'],
                display: 'swap'
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-plugin-transition-link`
    ]
}