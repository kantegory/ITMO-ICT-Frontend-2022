<template>
  <Header/>
  <div class="color-main min-vh-100">
  <RegisterForm />
  </div>
</template>

<script>

import RegisterForm from "../components/RegisterForm.vue";
import Header from "../components/Header.vue";
export default {
  name: "RegisterView",
  components: {Header, RegisterForm}
}

</script>


