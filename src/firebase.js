// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeEfZMmA71daof0F6iFT1t08PocKwi4HQ",
  authDomain: "mahavastu-36f99.firebaseapp.com",
  projectId: "mahavastu-36f99",
  storageBucket: "mahavastu-36f99.appspot.com",
  messagingSenderId: "474391686742",
  appId: "1:474391686742:web:8b94e8e84270926a5dd5f7",
  measurementId: "G-QPYD6VF7SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app); // Initialize Firestore here

// Optionally, initialize Analytics
const analytics = getAnalytics(app);

export { db };
