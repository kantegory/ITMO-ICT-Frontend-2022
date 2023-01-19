<template>
  <Header v-if="this.$route.path !== '/register' && this.$route.path !== '/login'" />
  <router-view />
  <Footer v-if="this.$route.path !== '/register'" />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue"
export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style>
/* Universal styles */
body {
  height: 100%;
}

html {
  line-height: 1.5rem;
  font-size: 16px;
}

.pa {
  width: 20%;
  height: fit-content;
  margin-left: 0 auto;
  position: relative;
}

.pa2 {
  width: 60%;
  height: fit-content;
  margin-left: 0 auto;
  position: relative;
}

.ap {
  height: 15%;
  position: relative;
  margin: 0 auto;
}

.ap2 {
  height: 70%;
  position: relative;
  margin: 0 auto;
}


.black {
  color: black;
}

.pink {
  color: #dc3545;
}

.black {
  color: black;
}

/* Nav */

.sections {
  width: 70%;
  height: fit-content;
  margin: 0 auto;
  position: relative;
}

.form-container2 {
  width: 100%;
  height: 100%;
  padding-top: 1rem;
}

.text-viridian {
  --tw-text-opacity: 1;
  color: rgba(0, 130, 148, var(--tw-text-opacity));
}

/* Search-Calendar -----*/
.search-background {
  position: absolute;
  z-index: -1;
  background-image: url("./assets/images/group1.jpg");
  width: 100%;
}

.wrapper {
  display: inline-flex;
  height: 6vh;
  width: 300px;
  align-items: space-around;
  border-radius: 5px;
}

.wrapper .option {
  height: 6vh;
  width: 100px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: white;
}

input[type="radio"] {
  display: none;
}

#option-1:checked:checked~.option-1,
#option-2:checked:checked~.option-2 {
  background-color: #ff5c5c;
  color: white;
}

.search-section {
  width: 60%;
  height: 17rem;
  margin: 0 auto;
  position: relative;
}


.search-container {
  background-color: #cb7737;
  width: 100%;
  height: fit-content;
  border: solid 0.5px #ffd4b2;
  border-radius: 50px;
  padding: 1rem;
  margin: 0 auto;

}

.search-box {
  border: solid 0.5px white;
  border-radius: 1.5rem;
  min-width: 24px;
  width: 300px;
  height: 6vh;
  outline: none;
}

.search-button {
  background-color: #5cc3ff;
  width: 3rem;
  height: 6vh;
  color: white;
  border-radius: 3rem;
  border: 1px solid #151212;
  outline: none;
}

.search-button:hover {
  opacity: 0.7;
}

.group-members {
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  background-color: lightgray;
  border: solid 1px lightgray;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
}

.main-form {
  width: 800px;
  border: 1px solid lightgrey;
  padding: 0.5rem;
  border-top: transparent;

}

.dd-l {
  background: #fff;
  height: 50px;
  width: 120px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid lightgrey;
  text-align: center;
}

.type-event {
  background-color: lightgray;
  padding: 1px;
  border: 0px solid;
  border-radius: 5px;
  width: 150px;
}

.search-image {
  display: inline-block;
  width: 250px;
  height: 150px;
  border-radius: 10px;
  box-sizing: border-box;
}

</style>
