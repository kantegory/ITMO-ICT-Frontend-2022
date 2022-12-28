<template>
  <section class="vh-100 bg-image"
           style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Login to Your Account</h2>

                <form>
                  <div class="form-outline mb-4">
                    <input type="email" id="form3Example3cg" class="form-control form-control-lg" placeholder="Your Email" v-model="email" />
<!--                    <label class="form-label" for="form3Example3cg">Your Email</label>-->
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form3Example4cg" class="form-control form-control-lg" placeholder="Password" v-model="password"/>
<!--                    <label class="form-label" for="form3Example4cg">Password</label>-->
                  </div>

                  <div v-show="error" class="error">{{ this.errorMsg }}</div>

                  <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-primary btn-block btn-lg gradient-custom-4 " @click.prevent="login">Login</button>
                  </div>

                  <p class="text-center mt-5 mb-0">Dont have account ?
                    <router-link class="fw-bold text-body" :to="{ name: 'Register' }">Register Here</router-link>
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
import "firebase/compat/auth"
export default {
  name: "Register.vue",
  data: function (){
    return{
      email:"",
      password:"",
      error: null,
      errorMsg:""
    }
  },
  methods:{
    login(){
      firebase.auth()
      .signInWithEmailAndPassword(this.email,this.password)
      .then(()=>{
        this.$router.push({name:"Home"});
        this.error = false;
        this.errorMsg="";
        console.log(firebase.auth().currentUser.uid)

      })
      .catch((err)=>{
        this.error= true;
        this.errorMsg= err.message;
      });
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