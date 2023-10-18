// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "uktech-b.firebaseapp.com", 
  projectId: "uktech-b",
  storageBucket: "uktech-b.appspot.com",
  messagingSenderId: "858486953545",
  appId: "1:858486953545:web:24cea3be6aa9559d871198"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);