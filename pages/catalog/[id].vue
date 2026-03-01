<template>
    <div>
        <Head>
            <Title> Купить - {{ data?.product.name }}</Title>
            <Meta
                name="description"
                :content="data?.product.short_description"
            />
        </Head>
        <div>{{ data?.product.name }}</div>
    </div>
</template>

<script lang="ts" setup>
import type { Product } from "~/interfaces/product.interface";

const route = useRoute();
const API_URL = useAPI();

const id = computed(() => {
    const raw = Array.isArray(route.params.id)
        ? route.params.id[0]
        : route.params.id;
    return String(raw ?? "");
});

const { data } = await useFetch<{ product: Product }>(
    API_URL + "/products/" + id.value,
);

// useSeoMeta({
//     title: `Купить - ${data.value?.product.name}`,
//     description: data.value?.product.short_description,
// });
</script>

<style scoped></style>
