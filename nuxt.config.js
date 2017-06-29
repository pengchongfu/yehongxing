module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'yehongxing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
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
          break;
        }
      }
      config.module.rules.push({
        test: /\.css$/,
        use: [ 'vue-style-loader', 'css-loader?modules' ],
        exclude: /(node_modules)/
      })
      config.resolve.alias['nuxt-class-component'] = '~plugins/nuxt-class-component'
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap-reboot.min.css',
    'bootstrap/dist/css/bootstrap-grid.min.css',
    '~assets/app.css'
  ]
}
