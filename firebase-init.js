// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ8lVJl9prE_MWXU5WokKVCwvbjUFvEbQ",
  authDomain: "fenixzone-roleplay-sv1.firebaseapp.com",
  projectId: "fenixzone-roleplay-sv1",
  storageBucket: "fenixzone-roleplay-sv1.firebasestorage.app",
  messagingSenderId: "410550508472",
  appId: "1:410550508472:web:252122eda3aadfc035cd4d",
  measurementId: "G-RKZCXTM51Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
