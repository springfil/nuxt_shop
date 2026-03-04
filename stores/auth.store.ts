import { defineStore } from "pinia";

export const useAuthStore = defineStore(
    "auth",
    () => {
        const token = ref<string | undefined>();
        const email = ref<string | undefined>();

        const setToken = (value: string) => {
            token.value = value;
        };

        const setEmail = (value: string) => {
            email.value = value;
        };

        const clearToken = () => {
            token.value = undefined;
        };

        return {
            token,
            email,
            setToken,
            setEmail,
            clearToken,
        };
    },
    {
        persist: true,
    },
);
