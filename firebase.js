
import { initializeApp } from "firebase/app";
import { getAuth}  from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABNmG8aw2qmSUwLkaYI4nYOXWSJpTiAJI",
  authDomain: "booking-app-bf2a6.firebaseapp.com",
  projectId: "booking-app-bf2a6",
  storageBucket: "booking-app-bf2a6.appspot.com",
  messagingSenderId: "585170505183",
  appId: "1:585170505183:web:63f95ca307586e9fd7086a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };