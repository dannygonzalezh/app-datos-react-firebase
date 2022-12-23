import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZP16-XZ8tika7DNdqTGvThvN4mPu8z_M",
    authDomain: "treelink-tutorial-f0c0d.firebaseapp.com",
    projectId: "treelink-tutorial-f0c0d",
    storageBucket: "treelink-tutorial-f0c0d.appspot.com",
    messagingSenderId: "506292644787",
    appId: "1:506292644787:web:87524d3ee304fb8f9739c6"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);