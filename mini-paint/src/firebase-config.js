import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiT6ZClU_y0qLvXnms8bSAbmRHJ7dq2xs",
  authDomain: "painter-c2469.firebaseapp.com",
  projectId: "painter-c2469",
  storageBucket: "painter-c2469.appspot.com",
  messagingSenderId: "429931771547",
  appId: "1:429931771547:web:417d5949c29eaad596383e",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
