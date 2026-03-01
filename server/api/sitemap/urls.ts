import type { SitemapUrlInput } from "@nuxtjs/sitemap";
import { useAPI } from "~/composables/useApi";
import type { GetProductsResponse } from "~/interfaces/product.interface";

export default defineSitemapEventHandler(async () => {
    const API_URL = useAPI();
    const data = await $fetch<GetProductsResponse>(API_URL + "/products", {
        query: {
            limit: 1000,
            ofsset: 0,
        },
    });

    const pages = data.products.map((product) => ({
        loc: `/catalog/${product.id}`,
        changefreq: "daily",
        priority: 0.5,
    })) satisfies SitemapUrlInput[];

    return pages;
});
