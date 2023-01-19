<template>
  <button
    class="d-flex login-button2 form-label justify-content-between"
    type="button"
  >
    <img
      class="login-icon align-self-center"
      :src="require(`../assets/images/${icon}`)"
    />
    <div class="fw-light fs-6">{{ text }}</div>
    <div></div>
  </button>
</template>

<script>
export default {
  name: "LoginSocialBtn",
  props: {
    text: String,
    icon: String,
  },
};
</script>

<style>
.login-button2 {
  cursor: pointer;
  color: rgb(0, 0, 0);
  padding: 8px 12px;
  font-size: 1.25rem;
  line-height: 24px;
  height: 3rem;
  background-color: white;
  border: 1px solid #dbdbdb;
}
</style>