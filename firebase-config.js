
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// TODO: Replace the following with your app's Firebase project configuration
// Get this from Firebase Console -> Project Settings -> General -> Your Apps
  const firebaseConfig = {
    apiKey: "AIzaSyDpSmWi3TBiWy3y49S9rD4IigVdVLyTihE",
    authDomain: "volta2025.firebaseapp.com",
    projectId: "volta2025",
    storageBucket: "volta2025.firebasestorage.app",
    messagingSenderId: "259201813886",
    appId: "1:259201813886:web:de413b015f592d8d89372f",
    measurementId: "G-9QM2XDCPM2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
