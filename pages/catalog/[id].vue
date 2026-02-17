<template>
    <div>Catalog item with ID: {{ id }}</div>
</template>

<script lang="ts" setup>
const route = useRoute();

const id = computed(() => {
    const raw = Array.isArray(route.params.id)
        ? route.params.id[0]
        : route.params.id;
    return String(raw ?? "");
});
</script>

<style scoped></style>
