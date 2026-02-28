<template>
    <div class="catalog__grid">
        <CatalogCard
            v-for="product in products"
            :key="product.id"
            v-bind="product"
        />
    </div>
</template>

<script lang="ts" setup>
import type { Product } from "~/interfaces/product.interface";

const favouriteStore = useFavouritesStore();

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const products = ref<Product[]>([]);

watchEffect(async () => {
    const data = await Promise.all(
        favouriteStore.favouritesList.map((id) => {
            return $fetch<{ product: Product }>(API_URL + "/products/" + id);
        }),
    );

    products.value = data.map((el) => el.product);
});
</script>

<style scoped>
.catalog__grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 64px 12px;
}
</style>
