// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8DM__ctH7Cm-FRO2nxP8p36PKx3Mqk_w",
  authDomain: "zimo-auth.firebaseapp.com",
  projectId: "zimo-auth",
  storageBucket: "zimo-auth.appspot.com",
  messagingSenderId: "806505842008",
  appId: "1:806505842008:web:f33c9cc4331deb8197d12d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export default app;