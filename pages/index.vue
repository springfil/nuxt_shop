<template>
    <div>
        <div>index page</div>
        <NuxtLink to="/about">About</NuxtLink>
        <button @click="openAbout">Переход</button>
    </div>
</template>

<script lang="ts" setup>
const openAbout = () => {
    navigateTo({ path: "/about", query: { name: "John" } });
};
</script>

<style></style>
