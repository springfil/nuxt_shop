// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    // components: [
    //     {
    //         path: "~/components",
    //         pathPrefix: false,
    //     },
    //     {
    //         path: "~/widgets",
    //     },
    // ],
    modules: ["@nuxt/scripts", "@nuxt/image", "@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon"],
    runtimeConfig: {
        public: {
            token: "",
            apiUrl: "",
        },
    },
});