<template>
    <div>
        index page
        <NuxtLink to="/about">About</NuxtLink>
        <button @click="openAbout">Переход</button>
        <InputField
            variant="gray"
            placeholder="Введите ваш емейл для подписки"
        />
    </div>
</template>

<script lang="ts" setup>
const openAbout = () => {
    navigateTo({ path: "/about", query: { name: "John" } });
};
</script>

<style scoped></style>
