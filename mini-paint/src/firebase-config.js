import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX2xTIjDS4rU4_3xRekai3gOMnjhauEaE",
  authDomain: "mini-paint-2566a.firebaseapp.com",
  projectId: "mini-paint-2566a",
  storageBucket: "mini-paint-2566a.appspot.com",
  messagingSenderId: "788461609145",
  appId: "1:788461609145:web:446dc44daf4f37b9053b68",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
