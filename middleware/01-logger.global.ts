export default defineNuxtRouteMiddleware((from, to) => {
    if (import.meta.client) {
        return;
    }
    console.log(from, to);
});
