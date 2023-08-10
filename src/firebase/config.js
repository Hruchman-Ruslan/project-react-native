import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDlXqxVP8FwtQtpUOUGkvDWDz2wTy0gIEE",
  authDomain: "hopeful-adapter-394814.firebaseapp.com",
  databaseURL:
    "https://hopeful-adapter-394814-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hopeful-adapter-394814",
  storageBucket: "hopeful-adapter-394814.appspot.com",
  messagingSenderId: "602194328787",
  appId: "1:602194328787:web:2b64fba02793e073476826",
  measurementId: "G-22KF600CG6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
