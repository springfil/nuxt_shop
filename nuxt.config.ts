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
            link: [
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
    ],
});
