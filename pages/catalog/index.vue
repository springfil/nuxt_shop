<template>
    <div>
        Catalog
        <SelectField
            v-model="select"
            :options="[
                {
                    value: '',
                    label: 'Категории',
                },
                {
                    value: '1',
                    label: 'Первый',
                },
                {
                    value: '2',
                    label: 'Второй',
                },
            ]"
        />
    </div>
</template>

<script lang="ts" setup>
import type { GetCategoryResponse } from "~/interfaces/categoty.interface";

const inputValue = ref("");
const select = ref("");
const config = useRuntimeConfig();
const API_URL = config.public.apiurl;

await useAsyncData<GetCategoryResponse>(
    "categories",
    () => $fetch(API_URL + "/categories"),
    {
        watch: [inputValue],
    },
);
</script>

<style scoped></style>
