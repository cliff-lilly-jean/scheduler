// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyDgXx5ZWG2q08evM-2keSIWE2HW1LHMWvI",
 authDomain: "todo-3d74d.firebaseapp.com",
 projectId: "todo-3d74d",
 storageBucket: "todo-3d74d.appspot.com",
 messagingSenderId: "142457247364",
 appId: "1:142457247364:web:e6641a86886914b0d4d4d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


export default getFirestore();