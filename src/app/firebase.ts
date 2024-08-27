// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnbqz9ec7dv0Xq7FXXtzZEeqRjSr_XdTc",
  authDomain: "bblshop.firebaseapp.com",
  projectId: "bblshop",
  storageBucket: "bblshop.appspot.com",
  messagingSenderId: "1090978878450",
  appId: "1:1090978878450:web:ad64dbc7e3e4144b25d16b"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };