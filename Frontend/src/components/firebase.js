import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPskn0Kh5q8DCTORKNc6agK9_VQmuMyzI",
  authDomain: "otp-project-cfbbe.firebaseapp.com",
  projectId: "otp-project-cfbbe",
  storageBucket: "otp-project-cfbbe.appspot.com",
  messagingSenderId: "1015679410320",
  appId: "1:1015679410320:web:79976aa834c7c42a8ff815",
  measurementId: "G-G5ZH0YR3WY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
