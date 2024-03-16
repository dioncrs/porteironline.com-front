import PersonDialog from '@/components/PersonDialog';
import { AddCircleSharp, AddShoppingCartSharp, PlusOneSharp } from '@mui/icons-material'
import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'

export default function PersonPage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper sx={{p: 3}}>
     
      <Typography variant='h5'>
        Pessoas
        <IconButton color="primary" aria-label="Adicionar nova pessoa" onClick={handleClickOpen}>
        <AddCircleSharp fontSize='large'/>
      </IconButton>
      </Typography>  
      <PersonDialog open={open} handleClose={handleClose}    />

    </Paper>
  )
}
