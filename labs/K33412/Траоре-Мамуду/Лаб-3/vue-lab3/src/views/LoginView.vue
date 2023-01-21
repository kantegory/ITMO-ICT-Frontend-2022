<template>
  <div class="container-fluid">
    <form class="d-flex flex-column login-container">
      <div class="d-flex flex-column align-items-center mb-5">
        <h1 class="pt-3 font-title-2 font-semibold">Log in</h1>
        <div class="d-flex">
          <span class="me-2"> Not a member yet?</span>
          <router-link :to="{name: 'register'}"> Sign up</router-link>
          
        </div>
      </div>

      <div>
        <div class="mb-3 fw-bold">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
          />
        </div>

        <div class="mb-3">
          <div class="d-flex justify-content-between">
            <label for="exampleInputPassword1" class="form-label fw-bold"
              >Password</label
            >
            <a class="text-viridian text-decoration-none" href=""
              >Forgot Password</a
            >
          </div>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="pass"
          />
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Keep me signed in</label
          >
        </div>
      </div>
      <Button
        text="Log In"
        classes="fw-bold"
        @click.prevent="LogIn"
      />
      <br />
      <!-- or -->
      <div class="d-flex items-center justify-content-between my-2">
        <div style="width: 45%" class="p-1 login-orline">
          <hr />
        </div>
        <span class="p-1 login-orline">or</span>
        <div style="width: 45%" class="p-1 login-orline">
          <hr />
        </div>
      </div>
      <!-- log in with -->
      <div class="d-flex flex-column">
        <SocialBtn text="Log in with Facebook" icon="facebook.jpg" />
        <SocialBtn text="Log in with Google" icon="google-logo.jpg" />
        <SocialBtn text="Log in with Apple" icon="apple-logo.png" />
      </div>
    </form>
  </div>
  <Footer />
</template>

<script>
import SocialBtn from "../components/LoginSocialBtn.vue";
import Button from "@/components/Button.vue";
import axios from "axios";
export default {
  name: "LoginView",
  data: function(){
    return{
        email: '',
        pass: ''
    }
  },
  components: {
    SocialBtn,
    Button,
  },
  methods:{
    async LogIn(){
      if(this.email !== "" && this.password !== ""){
        const res = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.pass}`)
        if(res.status==200 && res.data.length>0){
          localStorage.setItem('userInfo', JSON.stringify(res.data));
          await this.$router.push({name: "home"})
        }else{
          alert("No user found")
        }
      }else{
        alert("Please fill all the input blocks")
      }
    }
  }
}
</script>

<style>
.login-icon {
  width: 1.75rem;
  height: 1.75rem;
}

.login-orline {
  color: solid #dbdbdb;
  opacity: 0.5;
}

.login-container {
  border: 1px solid #dbdbdb;
  width: 600px;
  height: 100%;
  margin: 50px auto;
  border-radius: 6px;
  padding: 4%;
}
</style>
