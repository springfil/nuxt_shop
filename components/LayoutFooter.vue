<template>
    <div class="footer">
        <hr />
        <div class="footer__top">
            <ul>
                <li><NuxtLink to="#">Контакты</NuxtLink></li>
                <li><NuxtLink to="#">Условия Покупки</NuxtLink></li>
                <li><NuxtLink to="#">Доставка и Возврат</NuxtLink></li>
            </ul>
            <div class="footer__form">
                <InputField
                    variant="black"
                    placeholder="Введите ваш емейл для новостей и акций"
                />
                <button class="footer__subscribe">
                    <Icon name="icons:arrow-right" size="8px" />
                </button>
            </div>
        </div>
        <div class="footer__bottom">
            <div>© {{ new Date().getFullYear() }} Shoppe</div>
            <div class="footer__social">
                <NuxtLink to="#">
                    <Icon name="icons:fb" size="30px" />
                </NuxtLink>
                <NuxtLink to="#">
                    <Icon name="icons:instagram" size="30px" />
                </NuxtLink>
                <NuxtLink to="#">
                    <Icon name="icons:linked" size="30px" />
                </NuxtLink>
                <NuxtLink to="#">
                    <Icon name="icons:twitter" size="30px" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.footer {
    margin: 0 auto;
    max-width: 1248px;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.footer hr {
    border: none;
    border-bottom: 1px solid var(--color-gray);
    height: 1px;
}

.footer__top {
    display: flex;
    justify-content: space-between;
}

.footer__top ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    gap: 30px;
}

.footer__top ul a {
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color-dark-gray);
    text-decoration: none;
}

.footer__top ul a:hover {
    color: var(--color-dark);
}

.footer__bottom {
    display: flex;
    justify-content: space-between;
}

.footer__social {
    display: flex;
    gap: 20px;
}

.footer__social a {
    color: var(--color-dark-gray);
}

.footer__social a:hover {
    color: var(--color-dark);
}

.footer__form {
    position: relative;
}

.footer__form input {
    min-width: 380px;
}

.footer__subscribe {
    position: absolute;
    right: 0;
    top: 10px;
    background: none;
    border: none;
}
</style>
