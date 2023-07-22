import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNqzXUe2bOqSIouuATG3kK0A5JwqKqWoY",
  authDomain: "finance-app-63363.firebaseapp.com",
  projectId: "finance-app-63363",
  storageBucket: "finance-app-63363.appspot.com",
  messagingSenderId: "1085846979368",
  appId: "1:1085846979368:web:30bb14e631b0f07eb4c61d",
  measurementId: "G-PTVMLCCQL9"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
