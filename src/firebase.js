// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCcPLZf-pG2dTU3gYMGOAgSWUhiZg7WA-g",
    authDomain: "desenvolvimento-as2.firebaseapp.com",
    projectId: "desenvolvimento-as2",
    storageBucket: "desenvolvimento-as2.appspot.com",
    messagingSenderId: "756471956566",
    appId: "1:756471956566:web:6c9515480d76ae3ce9e7f7",
    measurementId: "G-1E7W12CJFT"
  };

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializa os serviços de autenticação e banco de dados
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
