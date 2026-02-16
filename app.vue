<script setup lang="ts">
import type { LayoutKey } from "#app";
import "~/assets/styles/main.css";
// const config = useAppConfig();
// const runtime = useRuntimeConfig();
// const hello = ref(config.theme.mainColor);
// const token = ref(runtime.public.token);

// throw createError({
//     status: 300,
//     statusText: "Custom Error",
// });
const name = ref<LayoutKey>("auth");
</script>

<template>
    <NuxtLayout :name="name">
        <NuxtPage />
    </NuxtLayout>
</template>
