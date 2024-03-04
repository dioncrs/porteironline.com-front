import React, { useState } from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from "@mui/material/TextField";
import { Button, Typography, Divider } from "@mui/material";
import Icon from "@mui/material/Icon";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Alert from "@mui/material/Alert";
import LockIcon from '@mui/icons-material/Lock';
import { Logotipo } from "@/components/logotipo-component";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function LoginPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isEmailFocused, setEmailFocused] = useState(false);
    const [isPasswordFocused, setPasswordFocused] = useState(false);
    const [isFormSuccess, setFormSuccess] = useState(false);
    const [errorMessage, seterrorMessage] = useState("");
    const {userAuth, setUserAuth } = useAuth();

    const handleFocus = (stateSetter) => {
        stateSetter(true);
    };

    const handleBlur = (stateSetter) => {
        stateSetter(false);
    };

    const handleLogin = () => {
        setUserAuth({name: 'Dion'});
        
        // seterrorMessage("");
        // setFormSuccess(false);

        // const auth = getAuth();

        // signInWithEmailAndPassword(auth, email, password)
        //     .then(() => {

        //         setFormSuccess(true);

        //     })
        //     .catch((error) => {
        //         if (error.code === "auth/invalid-email") {
        //             seterrorMessage('O e-mail informado é inválido!');
        //         }
        //         if (error.code === "auth/user-not-found") {
        //             seterrorMessage('Email ou senha incorretos!');
        //         }
        //         else {
        //             seterrorMessage('Aconteceu um erro inesperado, tente novamente!');
        //         }
        //         setFormSuccess(false);
        //     });
        // return;
    }
    return (
        <Card
            variant="outlined" sx={{ transformStyle: "preserve-3d", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)", padding: 3 }}>
            <CardContent>
                <Logotipo />
                <br />
                <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} style={{ color: "#757575" }} fontWeight="bolt" variant="h6" >Login</Typography>
                <br />
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px", }}>
                    <Icon>
                        < AccountCircleIcon sx={{ fontSize: 26, color: isEmailFocused ? "#0277bd" : "#424242" }} />
                    </Icon>
                    <Typography variant="body2">
                        <TextField
                            value={email}
                            onFocus={() => handleFocus(setEmailFocused)}
                            onBlur={() => handleBlur(setEmailFocused)}
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                            autoFocus
                            sx={{ minWidth: 328 }} id="standard-basic" label="Email" variant="standard" />
                    </Typography>
                </Box>
                <br />
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px", }}>
                    <Icon>
                        < LockIcon sx={{ fontSize: 26, color: isPasswordFocused ? "#2196f3" : "#424242" }} />
                    </Icon>
                    <Typography variant="body2">
                        <TextField value={password} type="password"
                            onFocus={() => handleFocus(setPasswordFocused)}
                            onBlur={() => handleBlur(setPasswordFocused)}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            sx={{ minWidth: 328 }} id="standard-basic" label="Senha" variant="standard" />                            
                    </Typography>
                    
                </Box>
                <br />
                <Alert severity="success" sx={{ display: isFormSuccess && errorMessage === "" ? 'flex' : 'none' }}>Login efetuado com sucesso!</Alert>
                <Alert severity="error" sx={{ display: !isFormSuccess && errorMessage !== "" ? 'flex' : 'none' }}>{errorMessage}</Alert>
            </CardContent>

            <Box sx={{ marginTop: 2, display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Button  fullWidth type="button" onClick={handleLogin}
                        variant="contained">
                        Entrar
                    </Button>
                    <Typography sx={{margin: 1}}>Ou</Typography>                    
                    <Button fullWidth variant="outlined" href="/register">Cadastrar sua empresa</Button>
                    <Divider variant="fullWidth" component="br" />
                    <Link to="/recover-password">Esqueceu sua senha?</Link>
                </Box>

        </Card>
    );
}