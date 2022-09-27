// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-Rfd-3XVTBNz-aGGkf-QiANQfNQS22r8",
  authDomain: "accordion-eb60f.firebaseapp.com",
  projectId: "accordion-eb60f",
  storageBucket: "accordion-eb60f.appspot.com",
  messagingSenderId: "496880460447",
  appId: "1:496880460447:web:f789f579c3dff1c8b6b8aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// setup auth provider
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
