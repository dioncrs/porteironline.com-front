import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Loogotipo } from "../../components/Logotipo";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Alert from "@mui/material/Alert";

import LockTwoToneIcon from "@mui/icons-material/Lock";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircle";


export function RegisterPage() {
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isFormSuccess, setFormSuccess] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");

  const auth = getAuth();

  const handleFocus = (stateSetter) => {
    stateSetter(true);
  };

  const handleBlur = (stateSetter) => {
    stateSetter(false);
  };

  const handleCreateAccount = () => {
    seterrorMessage("");
    setFormSuccess(false);

    if (password !== passwordConfirmation) {
      seterrorMessage("As senhas não coincidem. Por favor, tente novamente.");
      setFormSuccess(false);
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setFormSuccess(true);
      })
      .catch((error) => {
        if(error.code === "auth/invalid-email"){
          seterrorMessage('O e-mail informado é inválido!');
        }
        else{
          seterrorMessage('Aconteceu um erro inesperado, tente novamente!');
        }
        setFormSuccess(false);        
      });
  };

  const card = (
    <React.Fragment>
      <CardContent style={{ color: "#424242" }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Loogotipo />
        <br />
        <Typography
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          style={{ color: "#757575" }}
          fontWeight="bold"
          variant="h6"
          component="div"
        >
          Registrar sua Empresa
        </Typography>
        <br />
        <br />        
        <Box sx={{ display: "flex", alignContent: "center", gap: "8px" }}>
          <Icon>
            <AccountCircleTwoToneIcon sx={{ fontSize: 26, color: isEmailFocused ? "#0277bd" : "#424242" }} />
          </Icon>
          <Typography variant="body2">
            <TextField
              sx={{ minWidth: 328 }}
              id="standard-basic"
              label="Email"
              variant="standard"
              onFocus={() => handleFocus(setEmailFocused)}
              onBlur={() => handleBlur(setEmailFocused)}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)                
              }}
              autoFocus
            />
          </Typography>
        </Box>
        <br />
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon>
            <LockTwoToneIcon sx={{ fontSize: 26, color: isPasswordFocused ? "#2196f3" : "#424242" }} />
          </Icon>
          <Typography variant="body2">
            <TextField
              sx={{ minWidth: 328 }}
              id="standard-basic"
              label="Senha"
              variant="standard"
              onFocus={() => handleFocus(setPasswordFocused)}
              onBlur={() => handleBlur(setPasswordFocused)}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
               }}
              type="password"

            />
          </Typography>
        </Box>
        <br />
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon>
            <LockTwoToneIcon sx={{ fontSize: 26, color: isConfirmPasswordFocused ? "#2196f3" : "#424242" }} />
          </Icon>
          <Typography variant="body2">
            <TextField
              sx={{ minWidth: 328 }}
              id="standard-basic"
              label="Confirmação de Senha"
              variant="standard"
              onFocus={() => handleFocus(setConfirmPasswordFocused)}
              onBlur={() => handleBlur(setConfirmPasswordFocused)}
              value={passwordConfirmation}
              onChange={(event) => {
                setPasswordConfirmation(event.target.value);
               }}
              type="password"
            />
          </Typography>
        </Box>
        <br />
        <Alert severity="success" sx={{display: isFormSuccess && errorMessage === "" ? 'flex': 'none' }}>Cadastro efetuado com sucesso!</Alert>
        <Alert severity="error" sx={{display: !isFormSuccess && errorMessage !== "" ? 'flex': 'none' }}>{errorMessage}</Alert>
        <br />
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to="/login">Faça login em vez disso</Link>
        </Button>
        <Box sx={{ marginLeft: "auto" }}>
          <Button href="" variant="contained" onClick={handleCreateAccount}>
            Criar
          </Button>
        </Box>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{ marginTop: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Card variant="outlined" sx={{ transformStyle: "preserve-3d", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)", padding: 3 }}>
            {card}
          </Card>
      </Box>
    </Container>
  );
}
