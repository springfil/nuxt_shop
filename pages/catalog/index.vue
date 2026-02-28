<template>
    <div>
        <h1 class="left">Каталог товаров</h1>
        <div class="catalog">
            <div class="catalog__filter">
                <div class="catalog__search">
                    <InputField
                        v-model="search"
                        variant="gray"
                        placeholder="Поиск..."
                    />
                    <Icon
                        name="icons:search"
                        size="18px"
                        @click="changeRoute"
                    />
                </div>
                <SelectField
                    v-model="category_id"
                    :options="categoriesSelect"
                />
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
import { useDebounceFn } from "@vueuse/core";
import type { GetCategoryResponse } from "~/interfaces/categoty.interface";
import type { GetProductsResponse } from "~/interfaces/product.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const route = useRoute();
const router = useRouter();
const category_id = ref(route.query.category_id?.toString() || "");
const search = ref(route.query.search?.toString() || "");

watch([category_id, search], () => {
    changeRoute(category_id, search);
});

const changeRoute = useDebounceFn((category_id, search) => {
    router.replace({
        query: {
            category_id: category_id.value,
            search: search.value,
        },
    });
}, 300);

const query = computed(() => ({
    limit: route.query.limit ?? 20,
    offset: route.query.offset ?? 0,
    category_id: route.query.category_id || undefined,
    search: route.query.search || undefined,
}));

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
        key: "get=products",
        query,
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
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.catalog__grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 64px 12px;
}

.catalog__search {
    position: relative;
}

.catalog__search .iconify {
    position: absolute;
    top: 12px;
    right: 8px;
}
</style>
