module.exports = {
    pathPrefix: "/me",
    plugins: [
        `gatsby-plugin-react-helmet`,
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
    ],
    siteMetadata: {
        title: "Maria Solano",
        description: "Maria Solano - Nerd without shame",
        url: "https://mariasolos.github.io/me", // No trailing slash allowed!
    }
}