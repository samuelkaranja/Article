// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6C0OOfzLkHig9zyFekU036SdIXPRsc2w",
  authDomain: "penned-8e748.firebaseapp.com",
  projectId: "penned-8e748",
  storageBucket: "penned-8e748.appspot.com",
  messagingSenderId: "352688360238",
  appId: "1:352688360238:web:94528a43f8c8d87c0d48bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
