import type { CreateFavourite } from "~/interfaces/favourites.interface";

export default defineEventHandler(async (event) => {
    const { email, ids } = await readBody<CreateFavourite>(event);
    console.log(email, ids);
    await useStorage("db").setItem(email, ids);
    return { success: true };
});
