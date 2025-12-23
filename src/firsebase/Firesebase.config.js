// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkioL97KfSDBCIjCGesdT-GIajBR2G_rQ",
  authDomain: "assignment-9-15af7.firebaseapp.com",
  projectId: "assignment-9-15af7",
  storageBucket: "assignment-9-15af7.firebasestorage.app",
  messagingSenderId: "688690423544",
  appId: "1:688690423544:web:a0abb69a221b795d6e7d0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);