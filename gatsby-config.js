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
        // {
        //     resolve: `gatsby-plugin-global-styles`,
        //     options: {
        //         pathToConfigModule: `src/utils/GlobalStyleComponent`,
        //         props: {
        //             theme: `src/styles/theme`,
        //             other: {
        //                 light: true
        //             }
        //         }
        //     },
        // },
        // {
        //     resolve: `gatsby-plugin-manifest`,
        //     options: {
        //         name: `gatsby-starter-default`,
        //         short_name: `starter`,
        //         start_url: `/`,
        //         background_color: `#663399`,
        //         theme_color: `#663399`,
        //         display: `minimal-ui`,
        //         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        //     },
        // },
    ],
}
