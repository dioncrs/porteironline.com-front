import React, { useState } from "react";
import { useActionData, useNavigation, Form } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Logotipo } from "@/components/Logotipo";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link"

import { CircularProgress, Divider } from "@mui/material";
import { useAuth } from "@/hooks/useAuth";

export function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [displayName, setdisplayName] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();


  async function registerAction({ request }) {
    const formData = await request.formData();
  
    const email = formData.get("email");
    const password = formData.get("password");
    const passwordConfirmation = formData.get("passwordConfirmation");
    console.log("efetuando cadastro", email, password, passwordConfirmation)
  
    if (password !== passwordConfirmation) {
      return { error: "As senhas não coincidem. Por favor, tente novamente." };
    }
  
    try {
      await authProvider.signup(email, password);
    } catch (error) {
      if (errorMessages[error.code]) {
        return { error: errorMessages[error.code] };
      }
      console.log(error);
      return { error: "Falha ao tentar fazer login!" }
    }
    return redirect("/app/dashboard");
  }


  return (
    <React.Fragment>
      <Card variant="elevation" sx={{ padding: "5px 30px" }}>
        <CardContent>
          <Form method="post" replace>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2} width="314">
            <Box padding={3}>
                            <Logotipo/>
                            </Box>
              <Typography variant="h5">
                Primeiro vamos cadastrar seu usuário.
              </Typography>
              <TextField
                fullWidth
                id="displayName"
                name="displayName"
                label="Seu nome"
                variant="outlined"
                value={displayName}
                onChange={(e) => setdisplayName(e.target.value)}
                autoFocus
              />
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Senha"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                fullWidth
                id="passwordConfirmation"
                name="passwordConfirmation"
                label="Confirmação de Senha"
                variant="outlined"
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              {errorMessage && !isLoggingIn ? (<Alert severity="error">{errorMessage}</Alert>) : null}

              <Button fullWidth type="submit" variant="contained" sx={{ margin: "24px 0 12px" }}>
                Cadastrar
              </Button>

              <Divider flexItem variant="fullWidth" />
              <Box alignItems="center" display="flex" flexDirection="column" >
                <Typography variant="subtitle2">Já possui cadastro?&nbsp;
                <Link href="/login" underline="hover">
                  Fazer Login
                </Link>
                </Typography>
               

                <Typography variant="subtitle2">Não recebeu o email de confirmação?&nbsp;
                <Link href="/login" underline="hover">
                  Reenviar e-mail
                </Link>
                </Typography>
               
              </Box>
              {isLoggingIn ? (<CircularProgress />) : null}
            </Box>
          </Form>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}