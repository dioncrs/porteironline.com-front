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
import { errorMessages } from "@/plugins/firebase";



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
            else {
                console.log(error);
                setErrorMessage("Ops! Ocorreu uma falha inesperada ao fazer login, tente Novamente.");
            }
        }
        finally {
            setIsLoggingIn(false);
        }
    };

    return (
        <React.Fragment>
            <Card variant="elevation" elevation={6} sx={{ padding: "5px 30px" }}>
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
                                fullWidth />

                            <TextField
                                type="password"
                                name="password"
                                id="password"
                                label="Senha"
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                fullWidth />
                        </Box>
                        <Typography align="right">
                            <Link variant="subtitle2" href="/recover-password" underline="hover">Esqueceu sua senha?</Link>
                        </Typography>                        
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: 314, gap: 2, mt:2 }}>
                            
                            <Button disabled={isLoggingIn} fullWidth onClick={handleLogin} variant="contained" sx={{ mt: 1 }}>
                                Entrar
                            </Button>
                            <Button disabled={isLoggingIn} fullWidth href="/registro" variant="outlined">
                                <Typography variant="button" align="center">
                                Chegando agora? Comece uma avaliação gratuita
                                </Typography>
                            </Button>
                            {errorMessage && !isLoggingIn ? (<Alert sx={{width: 314}} severity="error">{errorMessage}</Alert>) : null}
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: 314, mt:2 }}>
                            {isLoggingIn ? (<CircularProgress />) : null}
                        </Box>
                    </CardContent>



                </Form>
            </Card>
        </React.Fragment>
    );
}
