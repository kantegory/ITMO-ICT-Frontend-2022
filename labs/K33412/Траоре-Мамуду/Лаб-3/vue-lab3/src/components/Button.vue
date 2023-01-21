<template>
  <button :class="'button1 ' + classes">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    classes: String
  }
}
</script>

<style>
.button1 {
  padding: 10px 15px;
  font-size: 1.25rem;
  line-height: 24px;
  height: fit-content;
  width: 100%;
  border-radius: 8px;
  color: #fff;
  background-color: #f65858;
  border: 1px solid #f65858;
}

.button1:hover {
  opacity: 0.7;
}
</style>