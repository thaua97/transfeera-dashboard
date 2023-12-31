// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/index.scss'],
  components: [
    { path: '~/shared/icons', prefix: 'Icon' },
    '~/components',
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
  ],
  googleFonts: {
    useStylesheet: true,
    families: {
      Roboto: [300, 400, 500, 600, 800],
    }
  },
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/core/index.scss" as *;'
        }
      }
    }
  }
})
