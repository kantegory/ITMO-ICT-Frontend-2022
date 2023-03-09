<template>
    <main>
      <hr class="opacity-100 m-0 hr-jopa"/>
      <section class="px-4 py-5 my-5 text-center">
      <img class="d-block mx-auto mb-4" src="../assets/greetings.png" alt="" width="200" />
      <h1 class="display-5 fw-bold"> Нет учетной записи?</h1>
      <p class="lead mb-4">Заведите её, чтобы начать наше сотрудничество!</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <section class="form-signin">
          <b-form @submit="onClickListener">
      <big-button text="Зарегистрироваться"/>
    </b-form>
    </section>
    </div>
    </section>
    <hr class="opacity-100 m-0 hr-a" />
        <section>
            <h2 class="text-center lead my-5">
                Первый раз здесь? Скоро намечатеся <span class="text-success">попойка/гулянка/юбилей</span>? обращайся смело к 
                <span class="text-success">нам</span>!
            </h2>
        </section>
        <hr class="opacity-100 m-0 hr-a" />
      <b-form class="index-search-form" @submit="onSubmit">
        <heading text="Заказать мероприятие" />
        <index-small-forms />
        <search-button />
      </b-form>
    </main>
  </template>
  
  <script>
  import BigButton from "./BigButton.vue"
  import Heading from "./Heading.vue"
  import IndexSmallForms from "../components/IndexSmallForms.vue"
  import SearchButton from "../components/SearchButton.vue"
  export default {
    name: "IndexMain",
    components: {
      Heading,
      IndexSmallForms,
      SearchButton,
      BigButton
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.$router.push({
          name: "SearchResults",
          query: {
            country: document.getElementById("country").value,
            arrivalDatetime: document.getElementById("arrivalDatetime").value,
          }
        })
      }
    },
    onClickListener(event) {
      event.preventDefault()
      this.$router.push({
        name: "Registration"
      })
    }
  }
  </script>
  
  <style>
  main {
    height: 100%;
  }
  .index-search-form {
    height: 100%;
  }
  .hr-jopa {
    border: none;
    height: 11px;
    background-color: black;
    color: black;
  }
  .hr-a{
    border: none;
    height: 2px;
    background-color: black;
    color: black;    
  }
  </style>