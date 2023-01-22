import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzMP9lA5AYl--1JJoV7rvdISo3QJyak0A",
  authDomain: "mini-paint2.firebaseapp.com",
  projectId: "mini-paint2",
  storageBucket: "mini-paint2.appspot.com",
  messagingSenderId: "315093397185",
  appId: "1:315093397185:web:413f6bc6ea533403ceae40",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
