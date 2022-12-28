<template>
<!--  Component for showing the result-->
  <section class="book-list mt-5">
    <h2 class="text-center m-3">Search Results</h2>
      <div id="list-output">
        <book v-for="bookData in books" :key="bookData.id" :book="bookData"></book>
      </div>
  </section>
</template>

<script>
import book from "./Book.vue"
export default {
  name: "Books",
  components:{
    book
  },
  props:{
    books:{
      type: Array,
      required: true,
    }

  }
}
</script>

<style scoped>

</style>