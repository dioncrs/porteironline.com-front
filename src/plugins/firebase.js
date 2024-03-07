// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKPTp7CVetc7HQugZ6--prLGYmOuwCqaw",
  authDomain: "porteironline.firebaseapp.com",
  projectId: "porteironline",
  storageBucket: "porteironline.appspot.com",
  messagingSenderId: "1086883921782",
  appId: "1:1086883921782:web:29c653307c35a8481ac457"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth.languageCode = 'pt-br';

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

export const errorMessages = {
  "auth/invalid-email": 'O e-mail informado é inválido!',
  "auth/user-not-found": 'Email não encontrado!',
  "auth/weak-password": 'Senha Fraca! A senha deve ter ao menos 6 caracteres!',
  "auth/email-already-in-use": 'Esse e-mail já consta como cadastrado no sistema!',
  "auth/wrong-password": "Senha incorreta!",
  "auth/missing-password": "Senha não informada!"
}
