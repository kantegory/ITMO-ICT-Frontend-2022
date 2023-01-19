<template>
    <section>
      <!--section for Genral Text and Image-->
      <section class="container">
        <article class="row mt-5">
          <aside class="col-md-6 " style="display: flex; align-content: center; flex-direction: row; flex-wrap: wrap  ">
            <h1 >    Here you Can Search any Book you would like to Read.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non porro qui quia. Accusamus blanditiis delectus eum explicabo numquam quae tempora! A dolor hic id ipsum natus nulla perferendis perspiciatis quia?</p>
          </aside>
          <aside class="col-md-6">
            <div class="col-12 ml-2">
              <img src="../assets/1.jpg" alt="not-found" class="img-fluid img-thumbnail ">
            </div>
          </aside>
        </article>
      </section>
      <!--section of Search Box with title and button-->
      <section class="container">
        <article id="title" class="text-center mt-5">
          <h2>Welcome!
            Write Below What you are Looking for:</h2>
        </article>
        <article class="row">
          <div id="input" class="input-group mx-auto col-12">
            <input id="search-box" type="text" v-model="enteredData" class="form-control" placeholder="Search a Book" >
            <button id="search-button" class="btn btn-primary" @click="getData" >Search</button>
          </div>
        </article>
      </section>
      <!--component for showing API result-->
      <BookList :books="DataFromAPI"></BookList>

    </section>
</template>

<script>

import Swal from "sweetalert2";
import axios from 'axios'
import BookList from "@/components/Books.vue"

export default {
  name: "main",
  data: function (){
    return{
      enteredData: "",
      DataFromAPI: [],
      src: '',
    }
  },
  mounted() {
  },
  methods: {
     getData() {
        if (this.enteredData === null || this.enteredData === "" ){
              Swal.fire( {
                title:'Please Enter Something in search box',
                icon: "error"
              })
            }else if(!isNaN(this.enteredData)){
              Swal.fire( {
                title:'Please Enter Text Only in search box',
                icon: "error"
              })
               this.enteredData='';
        }
            else{
          axios
              .get(
                  `https://www.googleapis.com/books/v1/volumes?q=intitle:${this.enteredData}`
              )
              .then(response => {
                console.log(response.data.items)
                if(response.data.items === null || response.data.items === 0){
                  Swal.fire({
                    title: "No Responce From API ",
                    icon: "error"
                  })
                }else{
                  this.DataFromAPI = response.data.items
                }
              })
                console.log(this.dataFromAPI)
                this.enteredData=''}},
       },
       components: {
         BookList
       }

     }

</script>
<style scoped>
</style>
