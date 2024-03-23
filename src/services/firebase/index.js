import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB_ZZRvQc4hDhOL4yVNcK0htZ5lw40cAgE",
  authDomain: "react-entregafinal-coderhouse.firebaseapp.com",
  projectId: "react-entregafinal-coderhouse",
  storageBucket: "react-entregafinal-coderhouse.appspot.com",
  messagingSenderId: "883598018144",
  appId: "1:883598018144:web:23baf9be217689abc9e505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)