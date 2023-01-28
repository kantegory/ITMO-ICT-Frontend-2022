<template>
  <main class="text-center d-flex align-items-center py-4 min-vh-100">
    <div class="sign-form w-100 m-auto">
      <form method="post" @submit.prevent="register">
        <router-link class="navbar-brand pe-md-4 fs-4 col-12 col-md-auto text-center text-main" to="/index">
          <div class="container pb-4">
            <svg class="icon">
              <use xlink:href="../assets/sprite.svg#icon"></use>
            </svg>
            <span class="ms-md-1 mt-1 fw-bolder me-md-5">CryptoExchange</span>
          </div>
        </router-link>

        <div class="form-floating mb-2">
          <input v-model="username" type="text" name="username" class="form-control" id="floatingInputGroup1" placeholder="Username">
          <label for="floatingInputGroup1">Username</label>
        </div>

        <div class="form-floating mb-2">
          <input v-model="email" type="email" name="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
        </div>

        <div class="form-floating pb-5">
          <input v-model="password" type="password" name="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>

        <button class="w-100 btn btn-lg button-outline mb-3" type="submit">Зарегистрироваться</button>

        <p class="text-main">Если уже есть аккаунт, можно <router-link to="/login" class="link-main">войти</router-link></p>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      username: "",
      email: "",
      password: ""
    }
  },
  methods: {
    register() {
      this.axios
          .post("http://127.0.0.1:8000/auth/users/", {
            'username': this.username,
            'email': this.email,
            'password': this.password
          })
          .then(() => {
            alert("Регистрация прошла успешно!")
            this.$router.push({name: "login"})
          })
          .catch((err) => {
            alert(err)
            this.password = ""
          })
    }
  }
}
</script>
