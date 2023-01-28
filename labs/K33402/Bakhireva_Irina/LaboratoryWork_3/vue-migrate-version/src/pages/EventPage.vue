<template>
<nav-flex>
    <nav-button @click="$router.push('/register')">Зарегистрироваться</nav-button>
    <nav-button @click="$router.push('/auth')">Войти</nav-button>
</nav-flex>
<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <div class="inner cover">
    <h1 class="cover-heading"><b>Страница мероприятия {{ $route.params.id }}</b></h1>
    <p class="lead"> {{this.event_data.body}} </p>
    <p class="h4"> <b>Дополнительная Информация </b></p>
      <p class="mb-0"> <b>Место проведения:</b> {{ this.event_data.title}}</p>
    <p class="mb-0"> <b>Контакты организаторов:</b> - </p>
    <p class="mb-0"> <b>Время проведения:</b> - </p>
    <p class="lead">
      <a href="#" class="btn btn-lg btn-secondary">Добавить в закладки</a>
    </p>
  </div>
</div>
</template>

<script>
import navFlex from "@/components/NavFlex.vue";
import navButton from "@/components/UI/NavButton.vue";
import axios from 'axios'
export default {
    data() {
        return {
            event_data: []
        }
    },
    components: {
        navFlex,
        navButton,
    },
    methods: {
        async fetchEventData() {
            try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/"+this.$route.params.id);
            this.event_data = response.data;
            console.log(this.event_data);
            } catch (e) {
                alert('Error')
            }
        }
    },

    mounted() {
        this.fetchEventData()
    },

}
</script>

<style scoped>

</style>
