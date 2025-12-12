import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
  getFirestore, doc, setDoc, getDoc, updateDoc, serverTimestamp, increment, onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
        const firebaseConfig = {
            apiKey: "AIzaSyBA_M_gT63cj23LuIpjEL4qbD8czugbFXQ",
            authDomain: "skyless-84b51.firebaseapp.com",  
            projectId: "skyless-84b51",
            storageBucket: "skyless-84b51.appspot.com",
            messagingSenderId: "990229888756", 
            appId: "1:990229888756:web:ae7cc6a3f4bbbdb6c368a1" 
        };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const authNavBtn = document.getElementById("authNavBtn");

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