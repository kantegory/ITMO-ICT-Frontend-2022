<template>
  <div class="personal-box">
    <Header/>
    <Personal/>
  </div>
</template>

<script>
import Personal from "@/components/Personal.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    Personal,
    Header
  }
}
</script>

<style>
.personal-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 90%;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: var(--card-color);
  box-sizing: border-box;
  box-shadow: 0 15px 25px #00000099;
}
</style>