import React from "react"
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
export function LoginPage () {
    const var1 = 'Teste'

    return (   
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">

              <span className="login-form-title"> Login </span>
                
              <div className="wrap-input">
                <TextField id="standard-basic" label="Email" variant="standard" />          
              </div>

              <div className="wrap-input">
                <TextField id="standard-basic" label="Senha" variant="standard" />                
              </div>

              <div className="container-login-btn">
                <Button variant="contained">ENTRAR</Button>
              </div>
              <div className="cadastre sua empresa">
                <spam className="txt1"> cadastre sua empresa </spam>
                <a className="txt2" href="#">aqui</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}