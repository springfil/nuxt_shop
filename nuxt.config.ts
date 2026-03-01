// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: {
      enabled: true,

      timeline: {
        enabled: true,
      },
    },
    routeRules: {
        "/about": { prerender: true },
    },
    experimental: { appManifest: false },
    runtimeConfig: {
        token: "",
        public: {
            apiurl: "",
            imageurl: "",
        },
    },
    app: {
        layoutTransition: {
            name: "layout",
            mode: "out-in",
        },
        head: {
            title: "Магазин Shoppe",
            titleTemplate: "%s | Shoppe",
            htmlAttrs: {
                lang: "ru",
            },
            link: [
                { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
                {
                    rel: "manifest",
                    crossorigin: "anonymous",
                    href: "/manifest.webmanifest",
                },
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
                },
            ],
        },
    },
    icon: {
        customCollections: [
            {
                prefix: "icons",
                dir: "./assets/icons",
            },
        ],
    },
    robots: {
        disallow: ["/account"],
    },
    sitemap: {
        sources: ["/api/sitemap/urls"],
        defaults: {
            lastmod: new Date().toISOString(),
            priority: 0.5,
            changefreq: "weekly",
        },
    },
    modules: [
        "@nuxt/scripts",
        "@nuxt/image",
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxtjs/sitemap",
        "@nuxtjs/robots",
        "@pinia/nuxt",
        "pinia-plugin-persistedstate/nuxt",
    ],
});