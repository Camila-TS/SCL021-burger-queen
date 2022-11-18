import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3lithBjQb8fCsKqsk2jhTtkEkknAYrLg",
    authDomain: "burger-paradise.firebaseapp.com",
    projectId: "burger-paradise",
    storageBucket: "burger-paradise.appspot.com",
    messagingSenderId: "598541773710",
    appId: "1:598541773710:web:af68490c1f736be79112df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Inicializa firestore
const db = getFirestore(app);