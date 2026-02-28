export default defineNuxtRouteMiddleware(() => {
    if (import.meta.client) {
        return;
    }
    // console.log(from, to);
});
