<template>
    <button class="button" :class="color">
        <slot />
    </button>
</template>

<script lang="ts" setup>
const { color = "primary" } = defineProps<{
    color?: "primary" | "ghost";
}>();
</script>

<style scoped>
.button {
    border-radius: 4px;
    border: 1px solid var(--color-black);
    cursor: pointer;
    padding: 16px;
    font-size: 16px;
    font-weight: 700;
}

.primary {
    background-color: var(--color-black);
    color: var(--color-white-light);
    font-family: var(--font);
}

.primary:hover {
    background-color: var(--color-black-hover);
}

.ghost {
    color: var(--color-black);
    font-family: var(--font);
}

.ghost:hover {
    background-color: var(--color-black-hover);
    color: var(--color-white-light);
}
</style>
