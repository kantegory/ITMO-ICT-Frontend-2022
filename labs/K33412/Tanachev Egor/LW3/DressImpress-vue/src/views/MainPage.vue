<template>
    <main-layout>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-6 order-2 order-md-1">
                    <h1 class="section__first-title">
                        Добро пожаловать
                        <span>в мир стиля и моды</span>
                    </h1>
                    <p class="section__first-description">
                        Найдите свой неповторимый стиль с Dress to Impress. Мы предлагаем вам лучшие коллекции одежды и аксессуаров для того, чтобы вы всегда чувствовали себя уверенно и шикарно.
                    </p>
                    <a href="/catalog" class="section__first-btn">
                        Каталог
                    </a>
                </div>
                <div class="col-12 col-md-6 col-lg-6 order-1 order-md-2">
                    <img class="section__first-img" src="@/assets/img/main.jpg" alt="">
                </div>
            </div>
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from '@/layouts/MainLayout.vue'

    export default {
        name: 'MainPage',

        components: { MainLayout }
    }

</script>


<style>
    .header-bottom{
        display: none;
    }
</style>