
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAznpp8C6WD_NMgqCApkQDaTnK9YYRdlg",
  authDomain: "smartdine-d772f.firebaseapp.com",
  projectId: "smartdine-d772f",
  storageBucket: "smartdine-d772f.appspot.com",
  messagingSenderId: "1082112051271",
  appId: "1:1082112051271:web:1511e696591f03acf90962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app);