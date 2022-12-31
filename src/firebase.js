// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDu6VQMipvLHTU8mGdho5Da3tm6hRZt-mE",
    authDomain: "recipeapp-d8bbb.firebaseapp.com",
    projectId: "recipeapp-d8bbb",
    storageBucket: "recipeapp-d8bbb.appspot.com",
    messagingSenderId: "229327261125",
    appId: "1:229327261125:web:a753f4f1db2b9c04db0fac",
    measurementId: "G-HWS0RDE9DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);