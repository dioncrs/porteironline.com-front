import React from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from "@mui/material/TextField";
import {Button, Typography} from "@mui/material";
import Icon from "@mui/material/Icon";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function LoginPage () {

  
    const var1 = 'Teste'
    
    

    return (   
      <Card variant="elevation" sx={{ maxWidth: 365,}} className="container">
        <CardContent>
        <Box sx={{display: "flex", alignItems: "center", gap: "8px", }}>
          <Icon>
            < AccountCircleIcon sx={{fontSize: 26}}/>
          </Icon>
          <Typography variant="body2">
            <TextField sx={{ minWidth: 328 }} id="standard-basic" label="Nome da Empresa" variant="standard"/>           
          </Typography>
        </Box>
        <Box sx={{display: "flex", alignItems: "center", gap: "8px", }}>
          <Icon>
            < AccountCircleIcon sx={{fontSize: 26}}/>
          </Icon>
          <Typography variant="body2">
            <TextField sx={{ minWidth: 328 }} id="standard-basic" label="Nome da Empresa" variant="standard"/>           
          </Typography>
        </Box>
        </CardContent>
         <CardActions>
          <Button>Cadastre sua empresa</Button>
          <Button variant="contained">ENTRAR</Button>
         </CardActions>
      </Card>
    );
}