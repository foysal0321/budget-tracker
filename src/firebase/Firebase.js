import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXmb5GPK0i_7Tr31IfBqsTciZ-taF2oPg",
  authDomain: "email-password-auth-66aaf.firebaseapp.com",
  projectId: "email-password-auth-66aaf",
  storageBucket: "email-password-auth-66aaf.appspot.com",
  messagingSenderId: "849047086172",
  appId: "1:849047086172:web:c0ce05f43af6ee3537f299"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app