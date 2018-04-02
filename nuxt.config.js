module.exports = {
  // for my github
  // router: { base: '/my-nuxt-project/' },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Vuejs with NUXTJS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'belajar nuxt js' },
            // example vue-meta
      { hid: 'title', name: 'title', content: 'Nuxt.js project' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.3/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' }
    ]
  },
  
  modules: [
    'bootstrap-vue/nuxt',

    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }],
  ],
   /*
  ** Custom SCSS
  */
//  css: [
//   { src: '~/assets/scss/navigation.scss', lang: 'scss' }
// ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'red' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        // my customs scss
        
      }
    }
/////////////////////////////


  }
}
