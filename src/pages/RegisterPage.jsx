import { useState } from "react";
import { Logotipo } from "@/components/Logotipo";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link"

import { CircularProgress, Divider, Step, StepContent, StepLabel, Stepper } from "@mui/material";


import { createCompany } from "@/services/CompanyService";
import { createUser, updateUserProfile} from '@/services/UserService'
import { Navigate, useOutletContext } from "react-router-dom";
import { auth } from "@/plugins/firebase";


export function RegisterPage() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [ user, setUser ] = useOutletContext();


  const handleRegisterUser = async (e) => {
    e.preventDefault();

    try {
      setErrorMessage("");  
      setIsLoggingIn(true);
      await createUser(email, password);      
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } catch (error) {
      setErrorMessage(error);      
    }
    finally {
      setIsLoggingIn(false);
    }
  }

  const handleUpdateUserName = async (e) => {
    e.preventDefault();
    try {
      setErrorMessage(""); 
      setIsLoggingIn(true);
      await updateUserProfile({ displayName });
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } catch (error) {
      setErrorMessage(error);   
    }
    finally {
      setIsLoggingIn(false);
    }
  }

  const handleRegisterCompany = async (e) => {
    e.preventDefault();

    try {
      setErrorMessage(""); 
      setIsLoggingIn(true);      
      await createCompany({name: companyName, cnpj: cnpj, userAdminId: auth.currentUser.uid});
      setUser(auth.currentUser);
      setIsLoggingIn(false);
    } catch (error) {
      setErrorMessage(JSON.stringify(error));
      setIsLoggingIn(false);
    }
  }


  return (
      <Card variant="elevation" sx={{ padding: "5px 30px" }}>
        <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
              <Box padding={3}>
                <Logotipo />
              </Box>
              {/* <Typography variant="h5">
                Cadastre sua empresa
              </Typography> */}
              <Stepper activeStep={activeStep} orientation="vertical">
                <Step>
                  <StepLabel>
                    Cadastre seu usuário
                  </StepLabel>
                  <Box display="flex" flexDirection="column" alignItems="center" gap={2}>

                    <StepContent>
                      <Box display="flex" flexDirection="column" alignItems="center" gap={2} width={350}>
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
                        <Button disabled={isLoggingIn} fullWidth onClick={handleRegisterUser} variant="contained" sx={{ margin: "24px 0 12px" }}>
                          Próximo
                        </Button>
                      </Box>
                    </StepContent>
                  </Box>
                </Step>

                <Step>
                  <StepLabel>
                    Cadastre seu usuário
                  </StepLabel>
                  <Box display="flex" flexDirection="column" alignItems="center" gap={2}>

                    <StepContent>
                      <Box display="flex" flexDirection="column" alignItems="center" gap={2} width={350}>
                        <TextField
                          fullWidth
                          id="displayName"
                          name="displayName"
                          label="Seu nome"
                          variant="outlined"
                          value={displayName}
                          onChange={(e) => setDisplayName(e.target.value)}
                          autoFocus
                        />                        
                        <Button disabled={isLoggingIn} fullWidth onClick={handleUpdateUserName} variant="contained" sx={{ margin: "24px 0 12px" }}>
                          Próximo
                        </Button>
                      </Box>
                    </StepContent>
                  </Box>
                </Step>

                <Step>
                  <StepLabel>
                    Cadastre sua empresa
                  </StepLabel>
                  <Box display="flex" flexDirection="column" alignItems="center" gap={2}>

                    <StepContent>
                      <Box display="flex" flexDirection="column" alignItems="center" gap={2} width={350}>
                        <TextField
                          fullWidth
                          id="companyName"
                          name="companyName"
                          label="Nome da empresa"
                          variant="outlined"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          autoFocus
                        />
                        <TextField
                          fullWidth
                          id="cnpj"
                          name="cnpj"
                          label="CPF/CNPJ"
                          variant="outlined"
                          value={cnpj}
                          onChange={(e) => setCnpj(e.target.value)}
                        />
                        <Button disabled={isLoggingIn} fullWidth onClick={handleRegisterCompany} variant="contained" sx={{ margin: "24px 0 12px" }}>
                          Finalizar Cadastro
                        </Button>
                        {user && (
          <Navigate to="/dashboard" replace={true} />
        )}
                      </Box>
                    </StepContent>
                  </Box>
                </Step>
              </Stepper>
              {errorMessage && !isLoggingIn ? (<Alert sx={{ width: 350 }} severity="error">{errorMessage}</Alert>) : null}
              {isLoggingIn ? (<CircularProgress />) : null}
              <Divider flexItem variant="fullWidth" />
              <Box alignItems="center" display="flex" flexDirection="column" >
                <Typography variant="subtitle2">Já possui cadastro?&nbsp;
                  <Link href="/login" underline="hover">
                    Fazer Login
                  </Link>
                </Typography>
              </Box>

            </Box>
        </CardContent>
      </Card>
  );
}