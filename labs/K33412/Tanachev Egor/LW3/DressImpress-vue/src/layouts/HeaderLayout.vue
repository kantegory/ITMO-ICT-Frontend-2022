<template>
    <header class="header" id="header">
      <slot></slot>

    </header>

    <!-- HEADER MOBILE -->
    <div class="header__mobile">
        <div class="header__mobile-menu">
            <a href="index.html" class="header__menu-link">Главная</a>
            <a href="catalog.html" class="header__menu-link">Каталог</a>
            <a href="#" class="header__menu-link">Доставка</a>
            <a href="#" class="header__menu-link">Контакты</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderLayout',
    }
</script>