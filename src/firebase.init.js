// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgdL2uED-UuS-GizGYXS5FwNde4SPPtVQ",
    authDomain: "hotel-room-authentication-60-5.firebaseapp.com",
    projectId: "hotel-room-authentication-60-5",
    storageBucket: "hotel-room-authentication-60-5.appspot.com",
    messagingSenderId: "1027873665382",
    appId: "1:1027873665382:web:75514ab7ceeb8f5179d8a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;