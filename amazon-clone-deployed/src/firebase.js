// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPSSUcVwGEBXK-ygwQNBXZ6BL0bcsvmUA",
  authDomain: "clone-4f957.firebaseapp.com",
  projectId: "clone-4f957",
  storageBucket: "clone-4f957.appspot.com",
  messagingSenderId: "877156513762",
  appId: "1:877156513762:web:453ffc61e86e3aa813abbb",
  measurementId: "G-R6DL69XJ8L",
};

// // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };

// Hosting URL: https://clone-4f957.web.app
