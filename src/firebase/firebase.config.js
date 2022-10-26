// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyk4q0iTYf91CJxjZpYOYiMNnJasSUWUg",
  authDomain: "bright-zone.firebaseapp.com",
  projectId: "bright-zone",
  storageBucket: "bright-zone.appspot.com",
  messagingSenderId: "557669544300",
  appId: "1:557669544300:web:c39b248ef2a42b1b354349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;