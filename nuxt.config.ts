// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
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
    modules: [
        "@nuxt/scripts",
        "@nuxt/image",
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@pinia/nuxt",
        "pinia-plugin-persistedstate/nuxt",
    ],
});
