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

import { auth } from './firebase.js';
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Lógica para o botão Sair
document.getElementById('btn-sair').onclick = async () => {
    if (confirm("Deseja realmente sair do sistema?")) {
        try {
            await signOut(auth);
            // Redireciona para a sua página de login (ex: index.html)
            location.href = 'index.html'; 
        } catch (error) {
            console.error("Erro ao sair:", error);
            alert("Erro ao encerrar sessão.");
        }
    }
};

// Proteção extra: Se o usuário não estiver logado, manda pro login na hora
auth.onAuthStateChanged(user => {
    if (!user) {
        location.href = 'index.html';
    }
});
