// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNF0tg_Jrt-8iL8Azx2rY8zCVdaJU2l9g",
  authDomain: "job-board-da315.firebaseapp.com",
  projectId: "job-board-da315",
  storageBucket: "job-board-da315.firebasestorage.app",
  messagingSenderId: "908048807079",
  appId: "1:908048807079:web:58f70af2e706f27684d782",
  measurementId: "G-FHYPY906DE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
