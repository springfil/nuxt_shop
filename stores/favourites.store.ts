import { defineStore } from "pinia";

export const useFavouritesStore = defineStore(
    "favourites",
    () => {
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

        const toggleFavourites = (id: number) => {
            if (!favouritesList.value.includes(id)) {
                favouritesList.value.push(id);
                return;
            }

            favouritesList.value = favouritesList.value.filter(
                (favouriteId) => favouriteId !== id,
            );
        };

        const isFavourite = (id: number) => {
            return favouritesList.value.find((f) => f === id);
        };

        return {
            favouritesList,
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
