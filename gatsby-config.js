module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-layout`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/intl`,
                languages: [`pl`, `en`],
                defaultLanguage: `pl`,
                redirect: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Smart Oak System`,
                short_name: `Smart Oak`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `minimal-ui`,
                icon: 'src/assets/images/title-icon.png',
            },
        },
    ],
};
