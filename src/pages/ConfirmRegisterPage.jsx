import React, { useState } from "react";
import { useActionData, useNavigation, Form, useRouteLoaderData, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Logotipo } from "@/components/Logotipo";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";


import { auth } from "@/firebase";
import { CircularProgress, Divider } from "@mui/material";

export function confirmAction(){

}

export function confirmLoader(){

}


export function ConfirmRegisterPage() {
  let { user } = useRouteLoaderData("root");
  user = { ...user, companyName: "DionLTDA"}

  return (
    <React.Fragment>
      <Card variant="elevation" sx={{ padding: "5px 30px" }}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2} width="314">
            <Box padding={3}>
              <Logotipo />
            </Box>
            <Alert severity="error">Usuário cadastrado com sucesso!</Alert>
            <Typography>Estamos quase finalizando, informe de que nome podemos chamar sua empresa:</Typography>
            <TextField
                fullwidth
                id="companyName"
                name="companyName"
                label="Nome/Razão Social"
                variant="outlined"
                autoFocus
              />
               {/* {actionData && actionData.error && !isLoggingIn ? (<Alert severity="error">{actionData.error}</Alert>) : null} */}

            <Button fullwidth type="submit" variant="contained" sx={{ margin: "24px 0 12px" }}>
              Salvar e Continuar
            </Button>
            <Link to="/app/dashboard">Dashboard</Link>
          </Box>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}