<template>
    <div class="header" @click="increment">
        <NuxtLink to="/">
            <IconLogo />
            {{ counter1 }}
        </NuxtLink>
        <div class="header__content">
            <div class="header__menu">
                <NuxtLink to="/catalog">Магазины</NuxtLink>
                <NuxtLink to="/about">О нас</NuxtLink>
            </div>
            <div class="header__hr"></div>
            <div class="header__icons">
                <NuxtLink to="#">
                    <Icon name="icons:search" size="21px" />
                </NuxtLink>
                <NuxtLink to="/cart">
                    <Icon name="icons:cart" size="21px" />
                </NuxtLink>
                <NuxtLink to="/favourites">
                    <Icon name="icons:favourite" size="21px" />
                </NuxtLink>
                <NuxtLink to="/account">
                    <Icon name="icons:user" size="21px" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
console.log("setup");

const counter1 = ref(0);

const increment = () => {
    console.log("increment");
    counter1.value++;
};
</script>

<style scoped>
.header {
    margin: 0 auto;
    max-width: 1248px;
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
    border-bottom: 1px solid var(--color-gray);

    &__content {
        display: flex;
        align-items: center;
        gap: 60px;
    }

    &__menu {
        display: flex;
        gap: 60px;
    }
}

.header__menu a {
    font-size: 16px;
    line-height: 27px;
    color: var(--color-dark-gray);
    text-decoration: none;
    padding-bottom: 48px;
}

.header__menu a:hover {
    color: var(--color-black);
}

.header__menu a.router-link-active {
    color: var(--color-black);
    border-bottom: 1px solid var(--color-black);
}

.header__icons {
    display: flex;
    gap: 40px;
    align-items: center;
}

.header__icons a {
    padding-bottom: 48px;
}

.header__icons a:hover {
    color: var(--color-black);
}

.header__icons a.router-link-active {
    color: var(--color-black);
    border-bottom: 1px solid var(--color-black);
}

.header__hr {
    border-left: 1px solid var(--color-dark-gray);
    height: 17px;
    align-self: flex-start;
    margin-top: 4px;
}
</style>
