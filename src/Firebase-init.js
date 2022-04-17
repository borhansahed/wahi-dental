// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAubZtzn3YPYpvt-Vs4b4wMg0IuVOJVDuk",
  authDomain: "wahi-dental-studio.firebaseapp.com",
  projectId: "wahi-dental-studio",
  storageBucket: "wahi-dental-studio.appspot.com",
  messagingSenderId: "44663415357",
  appId: "1:44663415357:web:0f675547a1ec9d2e5d4054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth ;