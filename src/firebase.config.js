// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEnH5dZ6ei39SdbGwhRKNenr8zC8v0WxQ",
    authDomain: "job-portal-afif.firebaseapp.com",
    projectId: "job-portal-afif",
    storageBucket: "job-portal-afif.appspot.com",
    messagingSenderId: "713726585302",
    appId: "1:713726585302:web:90232eddeda904b0ea1c77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };