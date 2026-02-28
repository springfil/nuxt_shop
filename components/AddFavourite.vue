<template>
    <button
        v-show="isShown || favouriteStore.isFavourite(id)"
        class="fav-button"
        @click.stop.prevent="() => favouriteStore.toggleFavourites(id)"
    >
        <Icon name="icons:favour" size="18px" />
    </button>
</template>

<script lang="ts" setup>
const { id, isShown } = defineProps<{
    id: number;
    isShown: boolean;
}>();

const favouriteStore = useFavouritesStore();
</script>

<style scoped>
.fav-button {
    background: none;
    border: none;
    cursor: pointer;
}
</style>
