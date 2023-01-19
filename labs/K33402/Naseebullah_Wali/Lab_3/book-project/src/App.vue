<template>
    <section>
        <navigation v-if="!nav"/>
        <router-view />
        <foot v-if="!nav"/>
    </section>
</template>


<script>
import navigation from "@/components/Header.vue"
import foot from "@/components/footer.vue"
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
export  default {
 components:{
   navigation, foot
},
  data: function (){
   return{
     nav: null
   }
  },
  created() {
   firebase.auth().onAuthStateChanged((user) =>{
     this.$store.commit("updateUser",user);
     if(user){
       this.$store.dispatch("getCurrentUser");
     }
   }),
   this.checkRoute()
  },
  methods:{
   checkRoute(){
     if(this.$route.name === "Login" || this.$route.name === "Register" || this.$route.name === "Not_Found"){
       return this.nav = true
     }
     this.nav = false;
   }
  },
  watch:{
   $route(){
     this.checkRoute();
   },
  },
}
</script>
<style>

</style>
