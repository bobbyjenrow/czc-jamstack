// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Charleston Zen',
  plugins: [
    {
      use: 'gridsome-source-graphql-prismic',
      options: {
        url: 'https://charlestonzen.cdn.prismic.io',
        fieldName: 'prismic',
        typeName: 'prismic',
        headers: { 
          'Prismic-Ref': ``, // useMasterRef will overload this line
          'Authorization': `Token `,
        },
        useMasterRef: true
      },
    },
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        // provide path to the file with resources
        resources: './src/assets/scss/main.scss'
      }
    }
  ],
}
