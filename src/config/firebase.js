import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAKpZx1Vf87z10-g6is-o3oXRrZMLnNHb0",
  authDomain: "yusuf-saputra-8bdd9.firebaseapp.com",
  projectId: "yusuf-saputra-8bdd9",
  storageBucket: "yusuf-saputra-8bdd9.appspot.com",
  messagingSenderId: "813280030714",
  appId: "1:813280030714:web:69240f00a56657e7bf3e43",
  measurementId: "G-GXZED8SZME"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
