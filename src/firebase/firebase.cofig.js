// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKH2M74JX02bxGPqwS7gTjnlCrbNMCAR8",
  authDomain: "auth-dragon-news-1de43.firebaseapp.com",
  projectId: "auth-dragon-news-1de43",
  storageBucket: "auth-dragon-news-1de43.appspot.com",
  messagingSenderId: "642314724889",
  appId: "1:642314724889:web:27de606465890157a1ec88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;