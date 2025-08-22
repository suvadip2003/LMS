import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "lms-pro-8f498.firebaseapp.com",
  projectId: "lms-pro-8f498",
  storageBucket: "lms-pro-8f498.firebasestorage.app",
  messagingSenderId: "738845731752",
  appId: "1:738845731752:web:7bbfb2fcd9910beb338b9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}