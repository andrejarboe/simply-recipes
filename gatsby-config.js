/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: 'Andre Jarboe',
    person:{
      name: 'jack', age: 35
    },
    simpleData: ["item 1", "item 2"],
    complexData:[
      {name: "john", age:32},
      {name: "Jessica", age:21}
    ]
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
  
}
