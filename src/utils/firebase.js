// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0IcIyGed2PKpM6su2H2PmYZHnYFuxIdM",
  authDomain: "netflix-gpt-d856d.firebaseapp.com",
  projectId: "netflix-gpt-d856d",
  storageBucket: "netflix-gpt-d856d.firebasestorage.app",
  messagingSenderId: "265407801743",
  appId: "1:265407801743:web:ac13634e4ee2e05ea883fa",
  measurementId: "G-W7SZ7R10W4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();