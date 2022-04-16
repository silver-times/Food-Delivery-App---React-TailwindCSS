import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDE5FPRIPEdmiGOQI_kvKqYCdNIlhkFYLc",
  authDomain: "bolt-food-b40ed.firebaseapp.com",
  databaseURL:
    "https://bolt-food-b40ed-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bolt-food-b40ed",
  storageBucket: "bolt-food-b40ed.appspot.com",
  messagingSenderId: "786108852119",
  appId: "1:786108852119:web:3a78fd25d2cc239c2e06d2",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
