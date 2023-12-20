import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCeLyVDHXrvDCIcDOwcLEC73eFjn3tgQKk",
    authDomain: "job-task-8723f.firebaseapp.com",
    projectId: "job-task-8723f",
    storageBucket: "job-task-8723f.appspot.com",
    messagingSenderId: "194448833428",
    appId: "1:194448833428:web:7b67cf2e2e95357da3ad81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;