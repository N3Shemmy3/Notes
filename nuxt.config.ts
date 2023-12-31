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



  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/supabase',
  ],

  plugins: [
    "@/plugins/vRipple.js"
  ],

  css: [
    "@/assets/css/tailwind.css",
    "@/assets/css/fontstyles.css",
    "@/assets/fonts/Montserrat.css",
    "@/assets/fonts/MajorMonoDisplay.css"
  ],
})
