import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4jnCws1M4IeDmokeFwubbiWBDrMJP2gA",
  authDomain: "activities-manager-503da.firebaseapp.com",
  projectId: "activities-manager-503da",
  storageBucket: "activities-manager-503da.appspot.com",
  messagingSenderId: "838834820562",
  appId: "1:838834820562:web:43886f228e55ce3308240b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, db, googleProvider, facebookProvider };

export default app;
