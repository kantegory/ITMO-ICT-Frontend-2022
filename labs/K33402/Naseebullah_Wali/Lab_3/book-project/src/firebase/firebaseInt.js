// import firebase from "firebase/compat";
// import {getFirestore} from "firebase/firestore";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBdCe36KSO9sv4bI3T2NtXgSONZf-TXMOg",
    authDomain: "bookapiproject-92825.firebaseapp.com",
    projectId: "bookapiproject-92825",
    storageBucket: "bookapiproject-92825.appspot.com",
    messagingSenderId: "554510943661",
    appId: "1:554510943661:web:3bf7040490921c36904d24"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();

