<template>
  <Header/>
  <div class="color-main min-vh-100">
    <LogIn />
  </div>
</template>

<script>
import LogIn from "../components/LogInForm.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "LogInView",
  components: {Footer, Header, LogIn},
}
</script>
