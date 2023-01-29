// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBa1_k3rg_YN5ZS2vwqW1v0mZOpu2RHvnE",
    authDomain: "appetites-25182.firebaseapp.com",
    projectId: "appetites-25182",
    storageBucket: "appetites-25182.appspot.com",
    messagingSenderId: "142003134623",
    appId: "1:142003134623:web:a34945c9b57a77f48fc2aa",
    measurementId: "G-X3WX7RSVXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);