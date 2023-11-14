// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    buildAssetsDir: "/app/",
    baseURL: "/Notes/",
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://api.iconify.design/ic:outline-note-add.svg?color=%23888888",
        },
      ],
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

  plugins: [
    "@/plugins/vRipple.js"
  ],

  css: [
    "@/assets/css/tailwind.css",
    "@/assets/fonts/Montserrat.css",
    "@/assets/fonts/MajorMonoDisplay.css"
  ],
})
