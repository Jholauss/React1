import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNXa39IsXGOZrc8b8VdiZlVWu9fJYIuIs",
  authDomain: "goodstore-bd3c1.firebaseapp.com",
  projectId: "goodstore-bd3c1",
  storageBucket: "goodstore-bd3c1.appspot.com",
  messagingSenderId: "716835658912",
  appId: "1:716835658912:web:79dd48f0e4643d1826bdc5"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);