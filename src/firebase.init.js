// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUAtH10Lm8D8PrhhuLg8B2Qk14Ne_o5ow",
  authDomain: "dara-gon--news.firebaseapp.com",
  projectId: "dara-gon--news",
  storageBucket: "dara-gon--news.firebasestorage.app",
  messagingSenderId: "1070402069595",
  appId: "1:1070402069595:web:2fbf35df20f9d2828e4b7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service 

 export const auth = getAuth(app);