import React from "react"
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



export function LoginPage() {
    const navigation = useNavigation();
    const isLoggingIn = navigation.formData?.get("email") != null;
    const actionData = useActionData();

    return (
        <React.Fragment>
            <Card variant="elevation" sx={{ padding: "5px 30px" }}>
                <Form method="post" replace>
                    <CardContent>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, width: 314 }}>
                            <Box padding={3}>
                            <Logotipo/>
                            </Box>
                            <Typography variant="h5">Entrar</Typography>
                            <TextField autoFocus name="email" id="email" label="Email" variant="outlined" fullWidth/>

                                <TextField type="password" name="password" id="password" label="Senha" variant="outlined" fullWidth/>
                                                               

                            {actionData && actionData.error && !isLoggingIn ? (<Alert severity="error">{actionData.error}</Alert>) : null}

                            <Button fullWidth type="submit" variant="contained" sx={{ margin: "24px 0 12px" }}>
                                Entrar
                            </Button>
                            <Divider flexItem variant="fullWidth" />

                            <Typography variant="subtitle2">Não possui cadastro? &nbsp;
                            <Link fullWidth underline="hover" href="/registro">Cadastre sua empresa</Link></Typography>
                                   
          
                                <Link variant="subtitle2" href="/recover-password" underline="hover" sx={{alignItems: 'left'}}>Esqueceu sua senha?</Link>                             


                            {isLoggingIn ? (<CircularProgress />) : null}
                        </Box>
                    </CardContent>



                </Form>
            </Card>
        </React.Fragment>
    );
}
