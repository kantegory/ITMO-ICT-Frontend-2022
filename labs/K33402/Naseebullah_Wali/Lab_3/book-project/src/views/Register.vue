<template>
  <section class="vh-100 bg-image"
           style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                <form>

                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example1cg" class="form-control form-control-lg" placeholder="Your Name" v-model="name"/>
<!--                    <label class="form-label" for="form3Example1cg">Your Name</label>-->
                  </div>

                  <div class="form-outline mb-4">
                    <input type="email" id="form3Example3cg" class="form-control form-control-lg" placeholder="Email" v-model="email"/>
<!--                    <label class="form-label" for="form3Example3cg">Your Email</label>-->
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form3Example4cg" class="form-control form-control-lg" placeholder="Password" v-model="password"/>
<!--                    <label class="form-label" for="form3Example4cg">Password</label>-->
                  </div>
                  <div v-show="error" class="error">{{ this.errorMsg }}</div>

                  <div class="d-flex justify-content-center">
                    <button type="button"
                            class="btn btn-primary btn-block btn-lg gradient-custom-4  " @click.prevent="register" >Register</button>
                  </div>

                  <p class="text-center mt-5 mb-0">Already Have account!
                    <router-link class="fw-bold text-body" :to="{ name: 'Login' }">Login Here</router-link>
                  </p>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "../firebase/firebaseInt";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async register() {
      if (
          this.name !== "" &&
          this.email !== "" &&
          this.password !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          name: this.name,
          email: this.email,
          password: this.password
        });
        this.$router.push({ name: "Home" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },
  },
};
</script>

<style scoped>
.error{
  color: red;
  margin-bottom: 5%;
}
</style>