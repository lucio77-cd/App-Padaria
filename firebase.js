import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBn1-bjBSfJAayZcifjY9DiJazzcyiQK58",
  authDomain: "padariaapp-e025f.firebaseapp.com",
  projectId: "padariaapp-e025f",
  storageBucket: "padariaapp-e025f.firebasestorage.app",
  messagingSenderId: "242006234958",
  appId: "1:242006234958:web:c87d401f09ba173e27b01f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

