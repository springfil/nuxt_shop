<script setup lang="ts">
import "~/assets/styles/main.css";
// const config = useAppConfig();
// const runtime = useRuntimeConfig();
// const hello = ref(config.theme.mainColor);
// const token = ref(runtime.public.token);

// throw createError({
//     status: 300,
//     statusText: "Custom Error",
// });
</script>

<template>
    <NuxtLayout>
        <main class="main">
            <NuxtPage
                :transition="{
                    name: 'page',
                    mode: 'out-in',
                }"
            />
        </main>
    </NuxtLayout>
</template>

<style scoped>
.page-leave-active,
.page-enter-active {
    transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}

.main {
    margin: 0 auto;
    max-width: 1248px;
    padding: 40px 0;
}
</style>
