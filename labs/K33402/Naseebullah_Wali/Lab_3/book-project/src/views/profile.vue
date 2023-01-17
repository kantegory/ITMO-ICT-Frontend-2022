<template>
      <section>
<!--          <div>-->
<!--            -->
<!--            <pre>{{this.results[1].volumeInfo.title}}</pre>-->
            <div class="row text-center " >
              <h1>Inbox</h1>
              <h2> Welcome: {{this.$store.state.name}}</h2>
              <h2>Amount of books: ({{results.length}})</h2>
            </div>
            <section v-for="result in results" :key="result.id" >
                <div class="col-12 m-2">
                  <div class="card" style="">

                      <div class="col-md-4 m-3 border"  >
<!--                        <pre>{{result.volumeInfo }}</pre>-->
                        <img v-bind:src="(result.volumeInfo.imageLinks) ? result.volumeInfo.imageLinks.thumbnail : 'Not found'" class="card-img-top" alt="Not Found" >
                      </div>

                      <div class="col-md-6">
                        <div class="card-body">
                          <h5 class="card-title">{{result.volumeInfo.title}}</h5>
                          <p class="card-text">Author: {{result.volumeInfo.authors[0] || "Not Found"}}</p>
                          <p class="card-text" >ID: {{result.id}}</p>
                          <p class="card-text">Published Date: {{result.volumeInfo.publishedDate}}</p>
                          <p class="card-text">Rating: {{result.volumeInfo.ratingsCount}}</p>
                          <p class="card-text">Pages: {{result.volumeInfo.pageCount}}</p>
                          <router-link :to="`/bookInfo/${result.id}`" target="_blank">
                            <button class="btn btn-secondary w-10 m-2">Description</button>
                          </router-link>
                          <a :href="result.volumeInfo.previewLink" target="_blank"><button class="btn btn-secondary w-10 m-2" >Read Now</button></a>
                          <button class="btn btn-secondary w-10 m-2" @click="removeFromList(result.id)">Remove Book</button>
                      </div>
                    </div>

                  </div>
                </div>

      </section>
      </section>

</template>

<script>

import "firebase/compat/auth"
import firebase from "firebase/compat";
import { collection, getDocs} from 'firebase/firestore'
// import {deleteDoc, doc} from 'firebase/firestore'
import axios from "axios";
import Swal from "sweetalert2";
import db from "../firebase/firebaseInt";

export default {
  name: "profile",
  data: ()=>{
    return{
      books: [],
      results: [],


    }
  },
  created() {
    this.getData()
    // this.results.filter((target)=> target.id !== this.key)

  },
  methods:{
    async getData(){
      const ref = collection(db,'FavoriteBook');
      getDocs(ref).then((snapshot) =>{
        snapshot.docs.forEach((doc)=>{
          this.books.push({
            ...doc.data(), id: doc.id
          })
        })
        // console.log(this.books[0].bookId)
        // let response= '';
        for(let i=0;  i< this.books.length; i++){
          if(this.books[i].userID === firebase.auth().currentUser.uid){
          axios
              .get(
                  `https://www.googleapis.com/books/v1/volumes?q=${this.books[i].bookId}`
              )
              .then(response => {
                if(response.data.items === null || response.data.items === 0){
                  Swal.fire({
                    title: "No Responce From API ",
                    icon: "error"
                  })
                }else{
                  this.results.push(...response.data.items);
                }
              })
          }
        }console.log(this.results)

      }).catch(err => {
        console.log(err.message)
      }
      )
    },

    async removeFromList(book){
      const snapshot = await firebase.firestore()
      .collection('FavoriteBook')
      .where("bookId", "==", book)
      .get();
      await Promise.all(snapshot.docs.map(doc=> doc.ref.delete()));
      window.location.reload();
      // this.results.filter((target) => target.id !== book)   //here i wanted that my file auto change the array
      // const getBook = await db.collection("FavoriteBook").doc(book);
      // await getBook.delete();
      // console.log(getBook);

    }
  }


}
</script>

<style scoped>

</style>