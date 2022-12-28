import { createStore } from "vuex";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import db from "../firebase/firebaseInt"

export default createStore({
  state: {
    user: null,
    name: null,
    email: null,
    uid: null,
    profileInitials: null,
  },
  mutations: {

    updateUser(state, payload){
      state.user = payload;
    },
    setProfileInfo(state, dataFromFirebase){
      state.email = dataFromFirebase.data().email;
      state.uid =  dataFromFirebase.id;
      state.name = dataFromFirebase.data().name;

    },
    setProfileInitials(state){
      state.profileInitials =
          state.name.match(/(\b\S)?/g).join("").toUpperCase();
    },
  },
  actions: {
    async getCurrentUser({commit}){
      const database = await  db.collection('users').doc(firebase.auth().currentUser.uid);
      const dbresult = await database.get();
      commit("setProfileInfo", dbresult);
      commit("setProfileInitials");
      console.log(dbresult.data())
      console.log(this.state.profileInitials);
      console.log(this.state.email);
    },
  },
  modules: {},
});
