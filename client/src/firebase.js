// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth2-7eccc.firebaseapp.com",
  projectId: "mern-auth2-7eccc",
  storageBucket: "mern-auth2-7eccc.appspot.com",
  messagingSenderId: "853506511225",
  appId: "1:853506511225:web:d65d2a059d1cadcffc5fa8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);