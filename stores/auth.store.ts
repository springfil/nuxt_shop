import { defineStore } from "pinia";

export const useAuthStore = defineStore(
    "auth",
    () => {
        const token = ref<string | undefined>();

        const setToken = (value: string) => {
            token.value = value;
        };

        const clearToken = () => {
            token.value = undefined;
        };

        return {
            token,
            setToken,
            clearToken,
        };
    },
    {
        persist: true,
    },
);
