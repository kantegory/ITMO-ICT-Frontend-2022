
<template>
  <section>
    <div >
      <div class="col-11 m-2">
        <div class="card" style="">
          <div class="row">

            <div class="col-md-4 m-3 border">
              <img v-bind:src="(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : 'Not Found'" class="card-img-top" alt="...">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">{{volumeInfo.title}}</h5>
                <p class="card-text">Author: {{volumeInfo.authors[0] || "Not Found"}}</p>
                <p class="card-text">ID: {{book.id}}</p>
                <p class="card-text">Published Date: {{volumeInfo.publishedDate}}</p>
                <p class="card-text">Rating: {{volumeInfo.ratingsCount}}</p>
                <p class="card-text">Pages: {{volumeInfo.pageCount}}</p>

                <router-link :to="`/bookInfo/${book.id}`" target="_blank">
                  <button class="btn btn-secondary w-10 m-2">Description</button>
                </router-link>
                <a :href="volumeInfo.previewLink" target="_blank"><button class="btn btn-secondary w-10 m-2" >Read Now</button></a>
                <button class="btn btn-secondary w-10 m-2" v-show="user" @click="AddToRead">Add to Read Later</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import "firebase/compat/auth"
import db from "../firebase/firebaseInt"
import firebase from "firebase/compat/app";
import Swal from "sweetalert2";

export default {
  name: "Book",
  props:{
    book:{
      type: Object,
      required: true,
    }
  },
  computed: {
    volumeInfo(){
      return this.book.volumeInfo
    },
      user(){
          return this.$store.state.user;
      }
  },
  methods: {
    async AddToRead(){
      const dataOfBook = await db.collection("FavoriteBook").doc();
      await dataOfBook.set({
        userID: firebase.auth().currentUser.uid,
        bookId: this.book.id,
      });
      await Swal.fire({
        position: "top-end",
        title: "Successfully Added",
        icon: "success",
        showConfirmButton: false,
        timer: 1500

      });
      // alert("current user is: " + firebase.auth().currentUser.uid)
    }
  }

}
</script>

<style scoped>

</style>
