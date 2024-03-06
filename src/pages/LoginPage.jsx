import React, { useState } from "react"
import { Form, useActionData, useNavigation } from "react-router-dom";
import { Logotipo } from "@/components/Logotipo";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import {
    Button,
    Typography,
    Divider,
    Box,
    Card,
    CardContent,
    TextField,
    Alert,
    CircularProgress,
    Link
} from "@mui/material";
import { useAuth } from '@/hooks/useAuth';
import { errorMessages } from "@/firebase";



export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setIsLoggingIn(true);
            await login({ email, password });

        } catch (error) {
            const errorFirebase = errorMessages[error.code];
            if (errorFirebase) {
                setErrorMessage(errorFirebase);
            }
            else{
                console.log(error);
                setErrorMessage("Ops! Ocorreu uma falha inesperada ao fazer login, tente Novamente.");
            }        
        }
        finally{
            setIsLoggingIn(false);
        }
    };

    return (
        <React.Fragment>
            <Card variant="elevation" sx={{ padding: "5px 30px" }}>
                <Form method="post" replace>
                    <CardContent>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, width: 314 }}>
                            <Box padding={3}>
                                <Logotipo />
                            </Box>
                            <Typography variant="h5">Entrar</Typography>
                            <TextField 
                            autoFocus 
                            name="email" 
                            id="email" 
                            label="Email" 
                            variant="outlined" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth={true} />

                            <TextField 
                            type="password" 
                            name="password" 
                            id="password" 
                            label="Senha" 
                            variant="outlined" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth={true} />


                            {errorMessage && !isLoggingIn ? (<Alert severity="error">{errorMessage}</Alert>) : null}

                            <Button fullWidth={true} onClick={handleLogin} variant="contained" sx={{ margin: "24px 0 12px" }}>
                                Entrar
                            </Button>
                            <Divider flexItem variant="fullWidth" />

                            <Typography variant="subtitle2">Não possui cadastro? &nbsp;
                                <Link fullWidth={true} underline="hover" href="/registro">Cadastre sua empresa</Link></Typography>


                            <Link variant="subtitle2" href="/recover-password" underline="hover" sx={{ alignItems: 'left' }}>Esqueceu sua senha?</Link>


                            {isLoggingIn ? (<CircularProgress />) : null}
                        </Box>
                    </CardContent>



                </Form>
            </Card>
        </React.Fragment>
    );
}
