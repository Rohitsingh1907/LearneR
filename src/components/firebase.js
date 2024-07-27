// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1f2yyqm7P5rytugWV7FZscUYuTwSd9pc",
  authDomain: "edtech-3a13a.firebaseapp.com",
  projectId: "edtech-3a13a",
  storageBucket: "edtech-3a13a.appspot.com",
  messagingSenderId: "471626392426",
  appId: "1:471626392426:web:8887b8647f4c67c6abbb13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
