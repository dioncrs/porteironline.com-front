import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBOxNo7VmfbQZmdhUS7l1p7yCAxTUpzNG8",
    authDomain: "portaria-front.firebaseapp.com",
    databaseURL: "https://portaria-front.firebaseio.com",
    projectId: "portaria-front",
    storageBucket: "portaria-front.appspot.com",
    messagingSenderId: "13338233566",
    appId: "1:13338233566:web:0b16d3a848390aeed1104f"
  };
  
  
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service


export const errorMessages = {
    "auth/invalid-email": 'O e-mail informado é inválido!',
    "auth/user-not-found": 'Email não encontrado!',
    "auth/weak-password": 'Senha Fraca! A senha deve ter ao menos 6 caracteres!',
    "auth/email-already-in-use": 'Esse e-mail já consta como cadastrado no sistema!',
    "auth/wrong-password": "Senha incorreta!",
    "auth/missing-password": "Senha não informada!"
}


  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export default app;
  