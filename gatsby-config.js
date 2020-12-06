module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-styled-components`
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: ['Roboto Slab'],
                display: 'swap'
            }
        }
    ]
}