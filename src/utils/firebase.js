// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChJ_ULCKhKvC0pODbqyj0eNvX_oxASX6k",
  authDomain: "netflixclone-561bd.firebaseapp.com",
  projectId: "netflixclone-561bd",
  storageBucket: "netflixclone-561bd.firebasestorage.app",
  messagingSenderId: "298908516670",
  appId: "1:298908516670:web:dc24e989508ea4a1ccec6f",
  measurementId: "G-T4PCH10T5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
export default auth;
