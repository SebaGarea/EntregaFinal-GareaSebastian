import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7xFyMEuJ8hIpv5BAUcG61fn6VrbZ7ALk",
  authDomain: "ecommerce-sebastiangarea.firebaseapp.com",
  projectId: "ecommerce-sebastiangarea",
  storageBucket: "ecommerce-sebastiangarea.firebasestorage.app",
  messagingSenderId: "1035547970813",
  appId: "1:1035547970813:web:e4b9b2ddc80261acb1c294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);