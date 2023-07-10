import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import PlaceTwoToneIcon from "@mui/icons-material/PlaceTwoTone";
import { Loogotipo } from "../../components/Logotipo";
import { Container, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export function RegisterPage() {
  const [age, setAge] = useState("");
  const [isNameFocused, setNameFocused] = useState(false);
  const [isUfFocused, setUfFocused] = useState(false);
  const [isCityFocused, setCityFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordMismatchError, setPasswordMismatchError] = useState("");
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [isFormSuccess, setFormSuccess] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleFocus = (stateSetter) => {
    stateSetter(true);
  };

  const handleBlur = (stateSetter) => {
    stateSetter(false);
  };

  const handleCreateAccount = () => {
    if (password !== passwordConfirmation) {
      setPasswordMismatchError("As senhas não coincidem. Por favor, tente novamente.");
      setFormSubmitted(true);
      return;
    }
  
    setPasswordMismatchError("");
    setFormSubmitted(true);

    if (name.trim() === "") {
     
      setFormSuccess(false);
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password,name)
      .then((userCredential) => {
        const createdUser = userCredential.user;
  
       
        updateProfile(createdUser, {
          displayName: name
        })
          .then(() => {
            setFormSuccess(true);
            console.log(createdUser)
        
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setFormSuccess(false);
            
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setFormSuccess(false);
        
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const renderFormSuccessMessage = () => {
    if (isFormSubmitted && isFormSuccess) {
      return (
        <Typography variant="body2" sx={{ color: "#4caf50", marginTop: "8px" }}>
          Formulário enviado com sucesso!
        </Typography>
      );
    }
    return null;
  };
  
  const renderFormErrorMessage = () => {
    if (isFormSubmitted && !isFormSuccess) {
      return (
        <Typography variant="body2" sx={{ color: "red", marginTop: "8px" }}>
          Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.
        </Typography>
      );
    }
    return null;
  };

  const card = (
    <React.Fragment>
      <CardContent style={{ color: "#424242" }}>
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
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon>
            <AccountBalanceIcon sx={{ fontSize: 26, color: isNameFocused ? "#2196f3" : "#424242" }} />
          </Icon>
          <Typography variant="body2">
            <TextField
              sx={{ minWidth: 328 }}
              id="standard-basic"
              label="Nome da Empresa"
              variant="standard"
              onFocus={() => handleFocus(setNameFocused)}
              onBlur={() => handleBlur(setNameFocused)}
              onChange={handleNameChange}
            />
          </Typography>
        </Box>
        <br />
        <Typography variant="h5" component="div">
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Icon>
              <PlaceTwoToneIcon sx={{ fontSize: 27, color: isCityFocused && isUfFocused ? "#0277bd" : "#424242" }} />
            </Icon>
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">UF</InputLabel>

              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
                onFocus={() => handleFocus(setUfFocused)}
                onBlur={() => handleBlur(setUfFocused)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Text1</MenuItem>
                <MenuItem value={20}>Teste2</MenuItem>
                <MenuItem value={30}>teste3</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" sx={{ minWidth: 200 }}>
              <InputLabel id="demo-simple-select-filled-label">Cidade</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
                onFocus={() => handleFocus(setCityFocused)}
                onBlur={() => handleBlur(setCityFocused)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Text1</MenuItem>
                <MenuItem value={20}>Teste2</MenuItem>
                <MenuItem value={30}>teste3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Typography>
        <br />
        <br />
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
              type="password"
            />
          </Typography>
        </Box>
        <br />
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 500 }}>
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
              onChange={handleConfirmPasswordChange}
              type="password"
            />
          </Typography>
        </Box>
        {passwordMismatchError && (
          <Typography sx={{ color: "red", marginTop: "8px" }}>{passwordMismatchError}</Typography>
        )}
        {isFormSubmitted && isFormSuccess && renderFormSuccessMessage()}
        {isFormSubmitted && !isFormSuccess && renderFormErrorMessage()}
        <br />
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
      <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", width: 400 }}>
          <Card variant="outlined" sx={{ transformStyle: "preserve-3d", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)" }}>
            {card}
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
