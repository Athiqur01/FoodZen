// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFwz6E0vTBcpH-Frma4RDfwF0N_t9X3vE",
  authDomain: "codezenallfood.firebaseapp.com",
  projectId: "codezenallfood",
  storageBucket: "codezenallfood.appspot.com",
  messagingSenderId: "425906547515",
  appId: "1:425906547515:web:faae97e2362671bb45651e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth