// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Add Firebase storage
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCV-rjDQ6GUD_Bs9ikT4A6De4Qll9ssl2o",
  authDomain: "disnyplus-clone-5bddf.firebaseapp.com",
  projectId: "disnyplus-clone-5bddf",
  storageBucket: "disnyplus-clone-5bddf.appspot.com",
  messagingSenderId: "816945883573",
  appId: "1:816945883573:web:d8d80151c8d773976911fc",
  measurementId: "G-RTL2233F1S"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref;
export { auth, provider, storage };
export default db;
