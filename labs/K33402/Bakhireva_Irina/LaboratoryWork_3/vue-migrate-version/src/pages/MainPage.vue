<template>
    <nav-flex>
        <nav-button @click="$router.push('/register')">Зарегистрироваться</nav-button>
        <nav-button @click="$router.push('/auth')">Войти</nav-button>
    </nav-flex>
    <main-page-carousel></main-page-carousel>
</template>

<script>
import NavFlex from "@/components/NavFlex.vue"
import MainPageCarousel from "@/components/MainPageCarousel.vue"
import NavButton from "@/components/UI/NavButton.vue";
export default {
    components: {
        NavFlex,
        MainPageCarousel,
        NavButton,
    }
}
</script>

<style scoped>

</style>
