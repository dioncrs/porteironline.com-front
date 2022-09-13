import './App.css';
import { initializeApp } from "firebase/app";

function App(props) {
  const firebaseConfig = {
    apiKey: "AIzaSyBKPTp7CVetc7HQugZ6--prLGYmOuwCqaw",
    authDomain: "porteironline.firebaseapp.com",
    projectId: "porteironline",
    storageBucket: "porteironline.appspot.com",
    messagingSenderId: "1086883921782",
    appId: "1:1086883921782:web:29c653307c35a8481ac457"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);

  if (props.isLoggedIn) {
    return <h1>Bem vindo!</h1>;
  }
  else{
    return <h1>Faça Login</h1>;
  }
}

export default App;





