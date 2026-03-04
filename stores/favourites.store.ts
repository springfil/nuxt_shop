import { defineStore } from "pinia";

export const useFavouritesStore = defineStore(
    "favourites",
    () => {
        const authStore = useAuthStore();
        const favouritesList = ref<number[]>([]);

        const addToFavourites = (id: number) => {
            if (!favouritesList.value.includes(id))
                favouritesList.value.push(id);
        };

        const removeToFavourites = (id: number) => {
            favouritesList.value = favouritesList.value.filter(
                (favouriteId) => favouriteId !== id,
            );
        };

        const save = async () => {
            await $fetch<{ success: boolean }>("/api/favourites", {
                method: "POST",
                body: {
                    email: authStore.email,
                    ids: favouritesList.value,
                },
            });
        };

        const restore = async (email: string) => {
            const data = await $fetch<number[]>("/api/favourites", {
                query: {
                    email,
                },
            });
            favouritesList.value = data;
        };

        const toggleFavourites = (id: number) => {
            if (!favouritesList.value.includes(id)) {
                favouritesList.value.push(id);
                return;
            }

            favouritesList.value = favouritesList.value.filter(
                (favouriteId) => favouriteId !== id,
            );

            if (authStore.email) save();
        };

        const isFavourite = (id: number) => {
            return favouritesList.value.find((f) => f === id);
        };

        return {
            favouritesList,
            restore,
            addToFavourites,
            removeToFavourites,
            toggleFavourites,
            isFavourite,
        };
    },
    {
        persist: {
            storage: piniaPluginPersistedstate.localStorage(),
        },
    },
);
