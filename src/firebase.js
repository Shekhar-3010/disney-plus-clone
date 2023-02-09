// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, googleAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCV-rjDQ6GUD_Bs9ikT4A6De4Qll9ssl2o",
  authDomain: "disnyplus-clone-5bddf.firebaseapp.com",
  projectId: "disnyplus-clone-5bddf",
  storageBucket: "disnyplus-clone-5bddf.appspot.com",
  messagingSenderId: "816945883573",
  appId: "1:816945883573:web:d8d80151c8d773976911fc",
  measurementId: "G-RTL2233F1S"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider(); // add the social login of google (that little popuptells you to pick up which email you wanna log in with)

export {auth, provider, storage};
export default db;