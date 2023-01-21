<template>
<nav-flex>
    <a class="p-2"> Василий Петрович </a>
    <a class="btn btn-outline-primary" href="#">Выйти из аккаунта</a>
</nav-flex>
<cards-pool :cards_data_link="user_personal_link">
    <h1 class="display-4"> Ваши мероприятия </h1>
    <p class="lead">Для более подробной информации о мероприятии - прочитай карточку мероприяия</p>
</cards-pool>
</template>

<script>
import CardsPool from "@/components/CardsPool.vue";
import NavFlex from "@/components/NavFlex.vue";
export default {
    data() {
        return {
            user_personal_link: "https://jsonplaceholder.typicode.com/posts?_limit=5'",
        }
    },
    components: {
        CardsPool,
        NavFlex,
    }
}
</script>

<style scoped>

</style>
