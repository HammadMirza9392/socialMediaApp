// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYYhCmUDNN0xaA22vFeFqsrnt9AKIlXbM",
  authDomain: "socialmediaapp-a7e21.firebaseapp.com",
  projectId: "socialmediaapp-a7e21",
  storageBucket: "socialmediaapp-a7e21.appspot.com",
  messagingSenderId: "1007615873358",
  appId: "1:1007615873358:web:2663bbbf4e2cc660490e1f",
  measurementId: "G-9N6LNLD2ET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app);