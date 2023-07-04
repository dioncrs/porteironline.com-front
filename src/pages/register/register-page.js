import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import PlaceTwoToneIcon from "@mui/icons-material/PlaceTwoTone";
import { Loogotipo } from "../../components/Logotipo";
import {Container, CssBaseline} from "@mui/material";
import { Link } from "react-router-dom";

export function RegisterPage() {
  const [age, setAge] = React.useState("");
  const [isNameFocused, setNameFocused] = React.useState(false);
  const [isUfFocused, setUfFocused] = React.useState(false);
  const [isCityFocused, setCityFocused] = React.useState(false);
  const [isEmailFocused, setEmailFocused] = React.useState(false);
  const [isPasswordFocused, setPasswordFocused] = React.useState(false);
  const [isConfirmPasswordFocused, setConfirmPasswordFocused] =
    React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleNameFocus = () => {
    setNameFocused(true);
  };

  const handleNameBlur = () => {
    setNameFocused(false);
  };

  const handleUfFocus = () => {
    setUfFocused(true);
  };

  const handleUfBlur = () => {
    setUfFocused(false);
  };

  const handleCityFocus = () => {
    setCityFocused(true);
  };

  const handleCityBlur = () => {
    setCityFocused(false);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  const handleConfirmPasswordFocus = () => {
    setConfirmPasswordFocused(true);
  };

  const handleConfirmPasswordBlur = () => {
    setConfirmPasswordFocused(false);
  };

  const card = (
    <React.Fragment>
      <CardContent style={{ color: "#424242" }}>
        <Loogotipo/>
        <br />
        <Typography sx={{display: "flex",alignItems: "center",justifyContent: "center",}}style={{ color: "#757575" }}
                     fontWeight="bold" variant="h6"component="div">
          Registrar sua Empresa
        </Typography>
        <br />
        <br />
        <Box sx={{display: "flex", alignItems: "center", gap: "8px", }}>
          <Icon>
            <AccountBalanceIcon sx={{fontSize: 26,color: isNameFocused ? "#2196f3" : "#424242", }}/>
          </Icon>
          <Typography variant="body2">
            <TextField sx={{ minWidth: 328 }} id="standard-basic" label="Nome da Empresa" variant="standard"
              onFocus={handleNameFocus} onBlur={handleNameBlur}/>
          </Typography>
        </Box>
        <br />
        <Typography variant="h5" component="div">
          <Box sx={{display: "flex", alignItems: "center",gap: "8px",}}>
            <Icon>
              <PlaceTwoToneIcon sx={{fontSize: 27,color: isUfFocused ? "#0277bd" : "#424242",}}/>
            </Icon>
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">UF</InputLabel>

              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
                onFocus={handleUfFocus}
                onBlur={handleUfBlur} >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Text1</MenuItem>
                <MenuItem value={20}>Teste2</MenuItem>
                <MenuItem value={30}>teste3</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" sx={{ minWidth: 200 }}>
              <InputLabel id="demo-simple-select-filled-label">
                Cidade
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
                onFocus={handleCityFocus}
                onBlur={handleCityBlur}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Text1</MenuItem>
                <MenuItem value={20}>Teste2</MenuItem>
                <MenuItem value={30}>teste3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Typography>
        <br />
        <br />
        <Box
          sx={{ display: "flex",alignItems: "center", gap: "8px",}}>
          <Icon>
            <AccountCircleTwoToneIcon sx={{fontSize: 26, color: isEmailFocused ? "#0277bd" : "#424242", }}/>
          </Icon>
          <Typography variant="body2">
            <TextField sx={{ minWidth: 328 }} id="standard-basic" label="Email" variant="standard"
             onFocus={handleEmailFocus} onBlur={handleEmailBlur}/>
          </Typography>
        </Box>
        <br />
        <Box sx={{display: "flex",alignItems: "center", gap: "8px",}}>
          <Icon>
            <LockTwoToneIcon sx={{fontSize: 26,color: isPasswordFocused ? "#2196f3" : "#424242",}}/>
          </Icon>
          <Typography variant="body2">
            <TextField sx={{ minWidth: 328 }} id="standard-basic" label="Senha"variant="standard"
            onFocus={handlePasswordFocus}onBlur={handlePasswordBlur}/>
          </Typography>
        </Box>
        <br />
        <Box sx={{ display: "flex",alignItems: "center",gap: "8px",minWidth: 500, }}>
          <Icon>
            <LockTwoToneIcon sx={{ fontSize: 26, color: isConfirmPasswordFocused ? "#2196f3" : "#424242", }}/>
          </Icon>
          <Typography variant="body2">
            <TextField sx={{ minWidth: 328 }} id="standard-basic" label="Confirmação de Senha"variant="standard"
                       onFocus={handleConfirmPasswordFocus} onBlur={handleConfirmPasswordBlur}/>
          </Typography>
        </Box>
        <br />
      </CardContent>
      <CardActions>
        <Button size="small">
            <Link to="/login">
              Faça login em vez disso
              </Link>
        </Button>
        <Box sx={{ marginLeft: "auto" }}>
          <Button href="" variant="contained">
            Criar
          </Button>
        </Box>
      </CardActions>
    </React.Fragment>
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
    >
    <Box
      sx={{display: "flex", justifyContent: "center", alignItems: "center",minHeight: "100vh",width: 400, }}>
      <Card
       variant="outlined"sx={{ transformStyle: "preserve-3d",boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",}}>
        {card}
      </Card>
    </Box>
    </Box>
    </Container>
  );
}
