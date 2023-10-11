<template>
    <footer-layout>
        <div class="container">
            <div class="row">
                <div class="col-6 col-md-4 col-lg-3 order-1 order-md-1">
                    <a href="/" class="footer__logo" aria-label="footer__logo">
                        <svg aria-label="svg-footer__logo">
                            <use xlink:href="@/assets/img/sprite.svg#logo-footer"></use>
                        </svg>
                    </a>
                    <div class="footer__description footer__chart"> 
                        Ежедневно<br>10:00 – 20:00
                    </div>
                    <div class="footer__description footer__copyright">
                        Все права защищены<br>Copyright 2023
                    </div>
                </div>
                <div class="col-6 col-md-4 col-lg-3 order-3 order-md-2">
                    <div class="footer__menu-title">Меню</div>
                    <div class="footer__menu-link-row">
                        <div class="footer__menu-link-col">
                            <a href="/" class="footer__menu-link">Главная</a>
                            <a href="/catalog" class="footer__menu-link">Каталог</a>
                        </div>
                        <div class="footer__menu-link-col">
                            <a href="" class="footer__menu-link">Доставка</a>
                            <a href="" class="footer__menu-link">Контакты</a>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-4 col-lg-4 order-4 order-md-3">
                    <div class="footer__menu-title">Каталог</div>
                    <div class="footer__menu-link-row footer__menu-link-row_catalog">
                        <div class="footer__menu-link-col">
                            <a href="" class="footer__menu-link">Худи</a>
                            <a href="" class="footer__menu-link">Рубашки</a>
                        </div>
                        <div class="footer__menu-link-col">
                            <a href="" class="footer__menu-link">Штаны</a>
                            <a href="" class="footer__menu-link">Пиджаки</a>
                        </div>
                        <div class="footer__menu-link-col">
                            <a href="" class="footer__menu-link">Обувь</a>
                            <a href="" class="footer__menu-link">Аксессуры</a>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-12 col-lg-2 order-2 order-md-4">
                    <div class="footer__menu-title footer__menu-title_social">Соц. сети</div>
                    <div class="footer__menu-social">
                        <a href="" class="footer__menu-social-link" aria-label="footer__menu-social-vk">
                            <svg aria-label="svg-footer__menu-social-vk">
                                <use xlink:href="@/assets/img/sprite.svg#vk"></use>
                            </svg>
                        </a>
                        <a href="" class="footer__menu-social-link" aria-label="footer__menu-social-instagram">
                            <svg aria-label="svg-footer__menu-social-instagram">
                                <use xlink:href="@/assets/img/sprite.svg#instagram"></use>
                            </svg>
                        </a>
                        <a href="" class="footer__menu-social-link" aria-label="footer__menu-social-telegram">
                            <svg aria-label="svg-footer__menu-social-telegram">
                                <use xlink:href="@/assets/img/sprite.svg#telegram"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="footer__description footer__developer">
                        Разработка:<br>Таначев Егор
                    </div>
                </div>
            </div>
        </div>
    </footer-layout>
</template>

<script>
    import FooterLayout from '@/layouts/FooterLayout.vue'

    export default {
        name: 'FooterPage',

        components: { FooterLayout }
    }

</script>


<style>
</style>