import React from "react"
import { Button, Card, CardContent, Typography, CardActions } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

export function LoginPage () {
    const var1 = 'Teste'

    return (
        <>
        <h1>Bem vindo {var1} a pagina de login!</h1>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          benevolent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
      </CardActions>
    </Card>

        </>
    )
}