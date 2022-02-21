import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore} from '@firebase/firestore'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwv4jTHYv5CKadNlRI_kQFTyZXCpWtlmA",
  authDomain: "cold-case-catchers.firebaseapp.com",
  projectId: "cold-case-catchers",
  storageBucket: "cold-case-catchers.appspot.com",
  messagingSenderId: "81560884627",
  appId: "1:81560884627:web:af8ecf7ff052e53a4b4466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
