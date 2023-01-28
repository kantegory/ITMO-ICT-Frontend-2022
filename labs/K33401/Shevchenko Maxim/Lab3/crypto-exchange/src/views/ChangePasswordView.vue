<template>
  <main class="text-center d-flex align-items-center py-4 min-vh-100">
    <div class="sign-form w-100 m-auto">
      <form method="post" @submit.prevent="changePassword">
        <router-link class="navbar-brand pe-md-4 fs-4 col-12 col-md-auto text-center text-main" to="/">
          <div class="container pb-4">
            <svg class="icon">
              <use xlink:href="../assets/sprite.svg#icon"></use>
            </svg>
            <span class="ms-md-1 mt-1 fw-bolder me-md-5">CryptoExchange</span>
          </div>
        </router-link>

        <div class="form-floating mb-2">
          <input v-model="current_password" type="password" name="current_password" class="form-control"
                 id="current_password"
                 placeholder="Password" required>
          <label for="current_password">Текущий пароль</label>
        </div>

        <div class="form-floating pb-1">
          <input v-model="new_password" type="password" name="new_password" class="form-control" id="new_password"
                 placeholder="Password"
                 required>
          <label for="new_password">Новый пароль</label>
        </div>

        <div class="form-floating pb-5">
          <input v-model="re_new_password" type="password" name="re_new_password" class="form-control"
                 id="re_new_password" placeholder="Password"
                 required>
          <label for="re_new_password">Новый пароль еще раз</label>
        </div>

        <button class="w-100 btn btn-lg button-outline mb-3" type="submit">Сменить пароль</button>

        <div>
          <router-link to="/profile" class="link-main">Назад</router-link>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "ChangePasswordView",
  data() {
    return {
      current_password: "",
      new_password: "",
      re_new_password: ""
    }
  },
  methods: {
    changePassword() {
      this.axios
          .post("http://127.0.0.1:8000/auth/users/set_password/", {
            'new_password': this.new_password,
            're_new_password': this.re_new_password,
            'current_password': this.current_password
          }, {headers: {'Authorization': `Token ${localStorage.token}`}})
          .then(() => {
            alert("Успешная смена пароля")
            this.$router.push({name: "profile"})
          })
          .catch((err) => {
            alert(err)
            this.new_password = ""
            this.re_new_password = ""
            this.current_password = ""
          })
    }
  }
}
</script>

<style scoped>

</style>