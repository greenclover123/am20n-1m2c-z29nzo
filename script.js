// Inside your account page JS (after Firebase init + auth setup)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
  getFirestore, doc, setDoc, getDoc, updateDoc, serverTimestamp, increment, onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
        const firebaseConfig = {
            apiKey: "AIzaSyBA_M_gT63cj23LuIpjEL4qbD8czugbFXQ", // Replace with your actual API Key from Firebase Console
            authDomain: "skyless-84b51.firebaseapp.com",  
            projectId: "skyless-84b51",
            storageBucket: "skyless-84b51.appspot.com",
            messagingSenderId: "990229888756", // Replace with your actual Sender ID
            appId: "1:990229888756:web:ae7cc6a3f4bbbdb6c368a1" // Replace with your actual App ID
        };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const authNavBtn = document.getElementById("authNavBtn");

// 1️⃣ First, set based on localStorage (instant — no flicker)
function updateNavFromLocal() {
  if (localStorage.getItem("isLoggedIn") === "true") {
    authNavBtn.textContent = "account";
    authNavBtn.href = "account.html";
  } else {
    authNavBtn.textContent = "sign up";
    authNavBtn.href = "account.html";
  }
}
updateNavFromLocal();

// 2️⃣ Keep it correct with Firebase (authoritative)
onAuthStateChanged(auth, (user) => {
  if (user) {
    localStorage.setItem("isLoggedIn", "true");
    authNavBtn.textContent = "account";
    authNavBtn.href = "account.html";
  } else {
    localStorage.removeItem("isLoggedIn");
    authNavBtn.textContent = "sign up";
    authNavBtn.href = "account.html";
  }
});