import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYyzM1HHX8gVp7eXTfnqFE4llBnFzfHSI",
  authDomain: "backend-ecom-f89ac.firebaseapp.com",
  databaseURL: "https://backend-ecom-f89ac-default-rtdb.firebaseio.com",
  projectId: "backend-ecom-f89ac",
  storageBucket: "backend-ecom-f89ac.appspot.com",
  messagingSenderId: "901325854272",
  appId: "1:901325854272:web:ea50765713eeea85c071a5",
  measurementId: "G-HNQF591K4V",
};


// Initialize Firebase app
initializeApp(firebaseConfig)

//init firebase auth
const auth = getAuth()

export { auth }