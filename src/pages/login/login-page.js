import React from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from "@mui/material/TextField";
import {Button, Typography, Container, CssBaseline} from "@mui/material";
import Icon from "@mui/material/Icon";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { Loogotipo } from "../../components/Logotipo";
import { Link } from "react-router-dom";

export function LoginPage () {
    const card = (   
      <Card variant="elevation" sx={{ maxWidth: 700,}} className="container">
        <CardContent>
          <Loogotipo/>
           <br/>
           <Typography sx={{display:"flex",alignItems:"center",justifyContent:"center"}}style={{color:"#757575"}} fontWeight="bolt" variant="h6" >Login</Typography>
           <br/>
        <Box sx={{display: "flex", alignItems: "center", gap: "8px", }}>
          <Icon>
            < AccountCircleIcon sx={{fontSize: 26}}/>
          </Icon>
          <Typography variant="body2">
            <TextField sx={{ minWidth: 328 }} id="standard-basic" label="Email" variant="standard"/>           
          </Typography>
        </Box>
         <br/>
        <Box sx={{display: "flex", alignItems: "center", gap: "8px", }}>
          <Icon>
            < LockIcon sx={{fontSize: 26}}/>
          </Icon>
          <Typography variant="body2">
            <TextField sx={{ minWidth: 328 }} id="standard-basic" label="Senha" variant="standard"/>           
          </Typography>
        </Box>
         <br/>
        </CardContent>
         <CardActions>
          <Button><Link to="/cadastro">Cadastre sua empresa</Link></Button>
          <Box sx={{ marginLeft: "auto" }}>
          <Button  variant="contained">
            Entrar
          </Button>
        </Box>
         </CardActions>
      </Card>
    );
    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      ><Box sx={{display: "flex", justifyContent: "center", alignItems: "center",minHeight: "80vh",width: 400, }}>
          <Card
          variant="outlined"sx={{ transformStyle: "preserve-3d",boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",}}>
            {card}
          </Card>
        </Box>
      </Box>
    </Container>
      
    );
}