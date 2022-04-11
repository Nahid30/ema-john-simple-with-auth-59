// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQQpVWVnmddJW0LlOpoa0LMTY4e3aN440",
  authDomain: "ema-john-simple-a409d.firebaseapp.com",
  projectId: "ema-john-simple-a409d",
  storageBucket: "ema-john-simple-a409d.appspot.com",
  messagingSenderId: "234360765050",
  appId: "1:234360765050:web:df92587a982fbbdf9cd9c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;