var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var work = require('./data/work')
var exhibitions = require('./data/exhibitions')

var basicRoute = [
  '',
  'work',
  'studio',
  'about',
]

var workRoutes = []
Object.keys(work).map(key => {
  workRoutes.push(path.join('/work', key))
})

var exhibitionsRoutes = []
Object.keys(exhibitions).map(key => {
  exhibitionsRoutes.push(path.join('/exhibitions', key))
  for (var i = 1; i <= exhibitions[key].length; i++) {
    exhibitionsRoutes.push(path.join('/exhibitions', key, String(i)))
  }
})

basicRoute = basicRoute.concat(workRoutes, exhibitionsRoutes)

var routes = []
var locales = ['/', '/zh']
locales.map(locale => {
  routes = routes.concat(basicRoute.map(item => {
    return path.join(locale, item)
  }))
})

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: ['transform-decorators-legacy', 'transform-class-properties']
    },
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      for (var i = 0; i < config.module.rules.length; i++){
        if (config.module.rules[i].test.source === "\\.css$") {
          config.module.rules[i].include = /(node_modules)/
          config.module.rules[i].use = ExtractTextPlugin.extract({
            use: 'css-loader?sourceMap',
            fallback: 'vue-style-loader?sourceMap'
          })
          break;
        }
      }
      config.module.rules.push({
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?modules&sourceMap',
          fallback: 'vue-style-loader?sourceMap'
        }),
        exclude: /(node_modules)/
      })
      config.plugins.push(new ExtractTextPlugin({
        filename: 'common.[chunkhash].css',
        allChunks: true
      }))
      config.resolve.alias['nuxt-class-component'] = '~plugins/nuxt-class-component'
      config.resolve.alias['~data'] = path.join(__dirname, 'data')
      config.resolve.alias['~utils'] = path.join(__dirname, 'utils')
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vender: ['vue-i18n']
  },
  css: [
    'bootstrap/dist/css/bootstrap-reboot.min.css',
    'bootstrap/dist/css/bootstrap-grid.min.css',
    'font-awesome/css/font-awesome.min.css',
    '~assets/app.css'
  ],
  router: {
    middleware: 'i18n'
  },
  plugins: ['~plugins/i18n.js'],
  generate: {
    routes
  }
}
