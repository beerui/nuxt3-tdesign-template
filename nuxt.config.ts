// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  build: {
    transpile: ['tdesign-vue-next'],
  },
  modules: [
    'tdesign-vue-next/es/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        Inter: [400, 700],
        'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
      }
  }],
  ],
  
  typescript: {
    shim: false,
  },
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict'
    },
    storage: 'localStorage'
  },
  css: [
    '~/assets/css/main.less',
    '~/assets/css/tailwind.css',
    'tdesign-vue-next/es/style/index.css'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  postcss: {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ['last 5 version', '>1%', 'ie >=8']
      },
      tailwindcss: {}
    }
  }
})
