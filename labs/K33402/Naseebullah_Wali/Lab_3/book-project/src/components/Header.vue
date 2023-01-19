<template>
  <section>
    <!--nav bar-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Book Search Project </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <article class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'About'}">About</router-link>
          </li>

          <li class="nav-item" v-if="!user">
            <router-link class="nav-link" :to="{name: 'Login'}">Reg/log</router-link>
          </li>

          <li class="nav-item" v-show="user">
            <select id="selectBox" class="form-select form-select-lg mb-3 nav-link bg-dark text-center rounded-5" aria-label=".form-select-lg example" @change="valueOf()" >
              <option selected value="1">{{ this.$store.state.profileInitials }}</option>
              <option value="2">Inbox</option>
              <option value="3" >SignOut</option>
            </select>
          </li>
        </ul>
      </article>
    </nav>
  </section>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
export default {
  data:function (){
    return{
      profile: null,
    }
  },
  computed:{
    user(){
      return this.$store.state.user;
    }
  },

  methods: {
    valueOf() {
      let selectBox = document.getElementById("selectBox");
      let selectedValue = selectBox.options[selectBox.selectedIndex].value;
      if (selectedValue == 3) {
        firebase.auth().signOut();
        this.$router.push({name: 'Home'});
      } else if (selectedValue == 2) {
        this.$router.push({name: 'Profile'});
      } else if (selectedValue == 1) {
        this.$router.push({name: 'Home'});
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
