// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";  
const firebaseConfig = {
  apiKey: "AIzaSyD3oIYG8br1vTM1sYipdfi-YooclYFaXu4",
  authDomain: "myblog-10a4c.firebaseapp.com",
  projectId: "myblog-10a4c",
  storageBucket: "myblog-10a4c.firebasestorage.app",
  messagingSenderId: "222035158279",
  appId: "1:222035158279:web:2f5e970359833280a151a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
