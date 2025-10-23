// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYKCi66FswB3IbcI5V90nFJRP2ccv8u38",
  authDomain: "e-learning-app-it-art.firebaseapp.com",
  projectId: "e-learning-app-it-art",
  storageBucket: "e-learning-app-it-art.appspot.com",
  messagingSenderId: "943927701191",
  appId: "1:943927701191:web:e12010feb61a54740098e2",
  measurementId: "G-120XT2202H"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
