<template>
  <div class="container-fluid">
    <form class="d-flex flex-column register-container">
      <div class="mb-3 d-flex flex-column align-items-center">
        <span class="fs-1 fw-bold">Sign up</span>
      </div>
      <div class="d-flex flex-column">
        <SocialBtn text="Log in with Facebook" icon="facebook.jpg" />
        <SocialBtn text="Log in with Google" icon="google-logo.jpg" />
        <SocialBtn text="Log in with Apple" icon="apple-logo.png" />
      </div>
      <div class="d-flex items-center justify-content-between">
        <div style="width: 45%" class="p-1 login-orline">
          <hr />
        </div>
        <span class="p-1 login-orline">or</span>
        <div style="width: 45%" class="p-1 login-orline">
          <hr />
        </div>
      </div>
      <div>
        <div class="mb-3 fw-bold">
          <label for="exampleInputEmail1" class="form-label" >Your name</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="name"
          />
        </div>
        <div class="mb-3 fw-bold">
          <div class="flex space-between">
            <label for="exampleInputPassword1" class="form-label font-semibold" 
              >Email Address</label
            >
          </div>
          <input
            type="email"
            class="form-control"
            id="exampleInputPassword1"
            v-model="email"
          />
        </div>
        <div class="mb-3 fw-bold">
          <div class="flex space-between">
            <label for="exampleInputPassword1" class="form-label font-semibold"
              >Password</label
            >
          </div>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="pass"
          />
        </div>
      </div>

      <p class="pb-3 fw-light">
        Your name is public. We'll use your email address to send you updates,
        and your location to find Meetups near you
      </p>
      <Button
        text="Continue"
        classes="fw-bold mb-3"
        @click.prevent="register"
        
      />
      <div class="text-center text-decoration-none fs-6">
        When you "Continue", you agree to Meetup's
        <a class="text-viridian text-decoration-none">Terms of Service</a>. We
        will manage information about you as described in our
        <a class="text-viridian text-decoration-none">Privacy Policy</a>, and
        <a class="text-viridian text-decoration-none">Cookie Policy</a>.
      </div>
      <hr />
      <div class="d-flex justify-content-center">
        <span class="pe-1">Already a member?</span>
        <a
          href="login.html"
          class="text-decoration-none text-viridian"
          @click="goToPage('login')"
          @click.prevent
        >
          Log in.</a
        >
      </div>
    </form>
  </div>
</template>

<script>
import SocialBtn from "../components/LoginSocialBtn.vue";
import Button from "@/components/Button.vue";
//import { assertExpressionStatement } from "@babel/types";
import axios from 'axios'
export default {
  name: "RegisterView",
  data: function(){
    return{
        name: '',
        email: '',
        pass: ''
    }
  },
  components: {
    SocialBtn,
    Button,
  },
  mounted(){
    
  },
  methods: {
    goToPage(page) {
      this.$router.push(`./${page}`);
    },
    async register(){
      const res = await axios.post(`http://localhost:3000/users`,{
        email: this.email,
        firstname: this.name,
        password: this.pass
      });
      localStorage.setItem('user',JSON.stringify(res.data));
      alert("User Successfully Registered");
      this.$router.push({name: "home"})
      
      console.log(this.name , this.email)
      console.log(res)
    }
  },
};
</script>

<style>
.register-container {
  border: 1px solid #dbdbdb;
  width: 550px;
  height: 100%;
  margin: 1rem auto;
  border-radius: 6px;
  padding: 4%;
  box-sizing: border-box;
}
</style>