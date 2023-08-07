export default defineNuxtConfig({
  ssr: true,

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },


  components: [{
    path: '~/components',
    extensions: ['vue'],
  }],

  experimental: {
    emitRouteChunkError: 'automatic',
  },

  typescript: {
    strict: true,
    shim: false,
  },

  modules: [
    '@formkit/nuxt',
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    viewer: false,
  },

  devtools: {
    enabled: true,
  },
})
