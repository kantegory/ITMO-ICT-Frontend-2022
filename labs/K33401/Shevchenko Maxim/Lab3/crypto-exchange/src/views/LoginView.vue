<template>
  <main class="text-center d-flex align-items-center py-4 min-vh-100">
    <div class="sign-form w-100 m-auto">
      <form method="post" @submit.prevent="login">
        <router-link class="navbar-brand pe-md-4 fs-4 col-12 col-md-auto text-center text-main" to="/">
          <div class="container pb-4">
            <svg class="icon">
              <use xlink:href="../assets/sprite.svg#icon"></use>
            </svg>
            <span class="ms-md-1 mt-1 fw-bolder me-md-5">CryptoExchange</span>
          </div>
        </router-link>

        <div class="form-floating mb-2">
          <input v-model="username" name="username" class="form-control" id="floatingInput" placeholder="Username">
          <label for="floatingInput">Username</label>
        </div>

        <div class="form-floating pb-5">
          <input v-model="password" type="password" name="password" class="form-control" id="floatingPassword"
                 placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>

        <button class="w-100 btn btn-lg button-outline mb-3" type="submit">Войти</button>

        <p class="text-main">Если еще нет аккаунта, можно
          <router-link to="/register"
                       class="link-main">зарегистрироваться
          </router-link>
        </p>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.axios
          .post("http://127.0.0.1:8000/auth/token/login", {'username': this.username, 'password': this.password})
          .then((response) => {
            localStorage.token = response.data.auth_token
            this.$router.push({name: "index"})
          })
          .catch((err) => {
            alert(err)
            this.password = ""
          })
    }
  }
}
</script>

<style scoped>

</style>