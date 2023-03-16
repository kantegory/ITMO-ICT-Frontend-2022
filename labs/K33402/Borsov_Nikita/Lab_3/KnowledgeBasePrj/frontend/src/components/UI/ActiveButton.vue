<template>
<button class="btn btn-success">
<slot></slot>
</button>
</template>

<script>
export default {
    name: "ActiveButton"
}
</script>

<style scoped>

.btn-success{
  background-color: #ffffff !important;
  border-color: #4ea9f4 !important;
  color:  #4ea9f4 !important;;
}
.btn-success:hover {
  background-color: #4ea9f4 !important;
  color: #ffffff !important;
}



</style>
