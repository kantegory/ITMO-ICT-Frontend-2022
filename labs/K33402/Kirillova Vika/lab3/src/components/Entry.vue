<template>
  <main class="container-xl p-5 mb-5">
    <form class="d-flex-column" @submit.prevent="login">
      <h1 class="row mb-5 justify-content-center">Login</h1>
      <div class="row mb-3 justify-content-center">
        <label for="email" class="col-sm-1 col-form-label">Email</label>
        <div class="col-sm-3 col-md-4">
          <input type="text" class="form-control" v-model="form.email" name="email" id="email" autocomplete="off" placeholder="vika@gmail.com">
        </div>
      </div>
      <div class="row mb-3 justify-content-center">
        <label for="password" class="col-sm-1 col-form-label">Password</label>
        <div class="col-sm-3 col-md-4">
          <input type="password" class="form-control" v-model="form.password" name="password" id="password" autocomplete="off" placeholder="vika1234">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-sm-4 col-md-5">
          <button type="submit" class="btn btn-primary" :to="{ path: '/' }">Sign in</button>
          <a class="btn btn-primary" href="#" @click="$router.push('/registration/')" role="button">Registration</a>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import { mapActions } from 'pinia'
import router from '@/router'

import useLoginStore from '../stores/login'

export default {
  name: 'EntryBlock',

  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    ...mapActions(useLoginStore, ['userLogin']),

    async login() {
      const response = await this.userLogin(this.form);

      const { accessToken, user } = response.data

      localStorage.accessToken = accessToken
      localStorage.user = JSON.stringify(user)

      localStorage.accessToken ? router.push('/') : router.push('')
    }
  }
}
</script>
