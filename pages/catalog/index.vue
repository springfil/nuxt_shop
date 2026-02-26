<template>
    <div>
        <h1 class="left">Каталог товаров</h1>
        <div class="catalog">
            <div class="catalog__filter">
                <SelectField v-model="select" :options="categoriesSelect" />
            </div>
            <div class="catalog__grid">
                <CatalogCard
                    v-for="product in productsData?.products"
                    :key="product.id"
                    v-bind="product"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { GetCategoryResponse } from "~/interfaces/categoty.interface";
import type { GetProductsResponse } from "~/interfaces/product.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const select = ref("");

const { data } = await useFetch<GetCategoryResponse>(API_URL + "/categories");

const selectDefault = {
    value: "",
    label: "Категории",
};
const categoriesSelect = computed(() => {
    const defaultItem = [selectDefault];
    const categoryItems =
        data.value?.categories.map((category) => ({
            value: category.id.toString(),
            label: category.name,
        })) ?? [];

    return [...defaultItem, ...categoryItems];
});

const { data: productsData } = await useFetch<GetProductsResponse>(
    API_URL + "/products",
    {
        query: {
            limit: 20,
            offset: 0,
        },
    },
);
</script>

<style scoped>
.catalog {
    display: flex;
    gap: 36px;
}

.catalog__filter {
    width: 260px;
}

.catalog__grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px 12px;
}
</style>
