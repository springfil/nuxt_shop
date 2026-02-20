<template>
    <div class="select-wrapper">
        <select v-model="model" class="select">
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
        <Icon name="icons:arrow-bottom" class="select-icon" size="7px" />
    </div>
</template>

<script lang="ts" setup>
const model = defineModel<string>();
const { options } = defineProps<{
    options: {
        value: string;
        label: string;
    }[];
}>();
</script>

<style scoped>
.select-wrapper {
    position: relative;
}

.select-wrapper .select-icon {
    position: absolute;
    top: 22px;
    right: 24px;
}

.select {
    appearance: none;
    padding: 15px 12px;
    background: transparent;
    border: 1px solid var(--color-gray);
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
}
</style>
