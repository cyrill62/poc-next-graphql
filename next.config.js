const path = require('path')
const withSass = require('@zeit/next-sass')
const withSourceMaps = require('@zeit/next-source-maps')
const { withGraphQLConfig } = require('next-graphql-react/server')
const withImages = require('next-images')

module.exports = withGraphQLConfig(
  withImages(
    withSourceMaps(
      withSass({
        webpack(config) {
          config.resolve.alias['icons'] = path.join(
            __dirname,
            './node_modules/@kisskissbankbank/kitten/assets/images/icons'
          )

          return config
        },
        sassLoaderOptions: {
          includePaths: [
            path.join(
              __dirname,
              './node_modules/@kisskissbankbank/kitten/assets/stylesheets/'
            )
          ]
        }
      })
    )
  )
)
