<template>
  <main>
    <section class="min-vh-100">
      <div class="container text-center">
        <div class="container pt-5 pb-3 text-center">
          <div class="row pb-3">
            <div class="col text-main">
              <h1>Профиль пользователя {{user.username}}</h1>
            </div>
          </div>
        </div>
      </div>

      <UsersPortfolio/>

      <div class="row justify-content-center pb-3">
        <div class="col-auto">
          <button type="button" class="btn button-outline" @click="this.$router.push({name: 'change_password'})">Смена пароля
          </button>
        </div>
        <div class="col-auto">
          <button type="button" class="btn btn-outline-danger" @click="logout">Выход</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import UsersPortfolio from "../components/UsersPortfolio.vue";

export default {
  name: "ProfileView",
  components: {
    UsersPortfolio
  },
  data() {
    return {
      user: ''
    }
  },
  created() {
    if (!localStorage.token) {
      this.$router.push({name: "login"})
    }
    this.loadUser()
  },
  methods: {
    loadUser() {
      this.axios
          .get('http://127.0.0.1:8000/auth/users/me', {headers: {'Authorization': `Token ${localStorage.token}`}})
          .then((response) => {
            this.user = response.data
          })
    },
    logout() {
      this.axios
          .post("http://127.0.0.1:8000/auth/token/logout", {}, {headers: {'Authorization': `Token ${localStorage.token}`}})
          .then(() => {
            localStorage.token = ""
            this.$router.push({name: "index"})
          })
          .catch((err) => {
            alert(err)
          })
    }
  }
}
</script>
