import "./App.css";
import { initializeApp } from "firebase/app";
import { MainPage } from "./pages/main/main-page";
import { Box, Container, CssBaseline} from "@mui/material"
import { LoginPage } from "./pages/login/login-page";

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

  if (props.isLoggedIn) {
    return <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    ><MainPage /></Box></Container>;
  } else {
    return <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    ><LoginPage/></Box></Container>;
  }
}

export default App;
