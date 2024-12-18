// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAi53ISUus9hZvOGNQLQYH22US39r60kEs",
    authDomain: "corsecdatabase.firebaseapp.com",
    projectId: "corsecdatabase",
    storageBucket: "corsecdatabase.firebasestorage.app",
    messagingSenderId: "352663886420",
    appId: "1:352663886420:web:a62bd417bb1b2bd9342bc1",
    measurementId: "G-LLE3WFY0GY",
    databaseURL: "https://corsecdatabase-default-rtdb.firebaseio.com" // Tambahkan databaseURL jika menggunakan Realtime Database
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional, jika diaktifkan di proyek Firebase Anda)
const analytics = getAnalytics(app);

// Initialize Realtime Database
const database = getDatabase(app);

// Export instances to use in other parts of the app
export { app, analytics, database };
