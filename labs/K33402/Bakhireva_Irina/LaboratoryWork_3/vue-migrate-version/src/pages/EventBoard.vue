<template>
<nav-flex>
    <nav-button @click="$router.push('/register')">Зарегистрироваться</nav-button>
    <nav-button @click="$router.push('/auth')">Войти</nav-button>
</nav-flex>
<cards-pool :cards_data_link="general_events_link">
    <h1 class="display-4"> Все события </h1>
  <p class="lead">Для более подробной информации о мероприятия - прочитай карточку мероприятия</p>
</cards-pool>
</template>

<script>
import NavFlex from "@/components/NavFlex.vue";
import CardsPool from "@/components/CardsPool.vue";
import NavButton from "@/components/UI/NavButton.vue";
export default {
    data() {
        return {
            general_events_link: "https://jsonplaceholder.typicode.com/posts?_limit=14'",
        }
    },
    components: {
        CardsPool,
        NavFlex,
        NavButton,
    }
}
</script>

<style scoped>

</style>
