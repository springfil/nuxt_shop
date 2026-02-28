<template>
    <NuxtLink to="/" @click="authStore.clearToken">Выход</NuxtLink>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: "auth",
});

const authStore = useAuthStore();
</script>

<style scoped></style>
