import "./App.css";
import { initializeApp } from "firebase/app";
import { LoginPage } from "./pages/login/login-page";
import { RegisterPage } from "./pages/register/register-page";
import {
  Routes,
  Route
} from "react-router-dom";



function App(props) {
  const firebaseConfig = {
    apiKey: "AIzaSyBKPTp7CVetc7HQugZ6--prLGYmOuwCqaw",
    authDomain: "porteironline.firebaseapp.com",
    projectId: "porteironline",
    storageBucket: "porteironline.appspot.com",
    messagingSenderId: "1086883921782",
    appId: "1:1086883921782:web:29c653307c35a8481ac457",
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<RegisterPage />} />      
    </Routes>
  )

}

export default App;
