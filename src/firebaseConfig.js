// src/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDayNn-PsDgwuI6LaqSiMDqY-MtCAbRSU0",
  authDomain: "delasjotas.firebaseapp.com",
  projectId: "delasjotas",
  storageBucket: "delasjotas.firebasestorage.app",
  messagingSenderId: "1063367760633",
  appId: "1:1063367760633:web:1ff84feeb2611569b96028"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
