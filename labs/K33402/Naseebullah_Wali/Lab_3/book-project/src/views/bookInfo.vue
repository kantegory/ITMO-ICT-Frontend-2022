<template>
  <section class="container-fluid" v-for="item in URL_DATA" :key="item.id">
    <hr>
    <div class="row">
      <div class="col-md-4 ">
        <img v-bind:src="(item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : 'Not Found'" alt="Not found" class="img-fluid img-thumbnail ml-5">
      </div>
      <div class="col-md-8">
        <p><span class="font-weight-bold">Title:</span> {{item.volumeInfo.title}}</p>
        <p><span class="font-weight-bold">ID:</span> {{item.id}}</p>
        <p><span class="font-weight-bold">Author:</span> {{item.volumeInfo.authors}}</p>
        <p><span class="font-weight-bold">Page:</span> {{item.volumeInfo.page}}</p>
        <p><span class="font-weight-bold">Language:</span> {{item.volumeInfo.language}}</p>
        <p><span class="font-weight-bold">Publisher: </span> {{item.volumeInfo.publisher}}</p>
        <p class="text-wrap mr-5"><span class="font-weight-bold">Description:</span> {{item.volumeInfo.description}}</p>
        <p class="text-wrap mr-5"><span class="font-weight-bold">Isbn:</span> {{item.volumeInfo.industryIdentifiers[0].type}}</p>
        <router-link :to="'/'">
          <button class="btn btn-secondary w-10 m-2">Back to Search</button>
        </router-link>
        <a :href="item.volumeInfo.previewLink" target="_blank"><button class="btn btn-secondary w-10 m-2" >Read Now</button></a>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "bookInfo",

  data:function () {
  return{
    URL_DATA: [],
    API: ``,

    forApi: this.$route.params.id,
      }
    },
  mounted() {
    this.some()
  },
  methods:{
    some(){
      axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${this.forApi}`
            )
            .then(response => {
              console.log(response.data.items)
              if(response.data.items === null || response.data.items === 0){
                Swal.fire({
                  title: "No Responce From API ",
                  icon: "error"
                })
              }else{
                this.URL_DATA = response.data.items
              }


            })
        console.log(this.URL_DATA)
        }
    }
}
</script>

<style scoped>

</style>