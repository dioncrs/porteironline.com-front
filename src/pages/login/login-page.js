import React from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
export function LoginPage () {

    const var1 = 'Teste'

    return (   
      <Card variant="elevation" sx={{ maxWidth: 365,}} className="container">
        <CardContent>
          <Box className="wrap-login" sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <form className="login-form">
              <span className="login-form-title"> Login </span>                
              <Box className="wrap-input" sx={{alignContent:"center",gap:"8px" }}>
                <TextField id="standard-basic" label="Email" variant="standard" />          
              </Box>
              <div className="wrap-input">
                <TextField id="standard-basic" label="Senha" variant="standard" />                
              </div>            
            </form>
          </Box>
        </CardContent>
         <CardActions>
          <Button>Cadastre sua empresa</Button>
          <Button variant="contained">ENTRAR</Button>
         </CardActions>
      </Card>
    );
}