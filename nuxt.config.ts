import { defineNuxtConfig } from "nuxt/config";
import Icons from "unplugin-icons/vite";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  ssr: true, // <

  app: {
    head: {
      charset: "utf-8",
      htmlAttrs: {
        lang: "pl",
      },
      viewport: "width=device-width, initial-scale=1",
      title: "Ok Graphics - twój grafik komputerowy",
      meta: [
        // <meta name="description" content="My amazing site">
        {
          hid: `description`,
          name: "description",
          content:
            "Ok Graphics, twój grafik komputerowy, loga, wizytówki, ulotki, plakaty, banery",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  buildModules: ["@pinia/nuxt"],

  css: ["@/assets/css/styles.css"],

  vite: {
    plugins: [
      Icons({
        // the feature below is experimental ⬇️
        autoInstall: true,
      }),
    ],
  },
});
