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

import { auth } from "@/firebase";
import { CircularProgress, Divider } from "@mui/material";

export function RegisterPage() {
  const navigation = useNavigation();
  const isLoggingIn = navigation.formData?.get("email") != null;
  const actionData = useActionData();


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
                Cadastre sua Empresa
              </Typography>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                autoFocus
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Senha"
                variant="outlined"
                type="password"
              />
              <TextField
                fullWidth
                id="passwordConfirmation"
                name="passwordConfirmation"
                label="Confirmação de Senha"
                variant="outlined"
                type="password"
              />
              {actionData && actionData.error && !isLoggingIn ? (<Alert severity="error">{actionData.error}</Alert>) : null}

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