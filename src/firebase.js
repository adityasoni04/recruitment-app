// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzD4-S52y6tnKhUl8rM-vRtSl6iFmvuIo",
  authDomain: "recruitment-app-70fb7.firebaseapp.com",
  projectId: "recruitment-app-70fb7",
  storageBucket: "recruitment-app-70fb7.appspot.com",
  messagingSenderId: "644241848939",
  appId: "1:644241848939:web:8bcd4d840d4fcee03a0f2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();