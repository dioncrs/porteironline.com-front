import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AssignmentIndSharp, BadgeSharp, CameraAltSharp, CommentSharp, DeleteSharp, PersonSharp } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';

export default function PersonDialog({ open, handleClose }) {
    const [imgStatus, setImgStatus] = useState(0)

    function handleAddPhoto(params) {
        setImgStatus(1)
    }

    function handleRemovePhoto(params) {
        setImgStatus(0)
    }

    return (
        <Dialog
            open={open}
            maxWidth="lg"
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const document = formJson.document;
                    console.log(document);
                    handleClose();
                },
            }}
        >
            <DialogTitle>Cadastro de Pessoas</DialogTitle>
            <DialogContent>
                <Box display="flex" flexDirection="row" padding={1}>
                    <Box width={320} height={280}>
                        <Camera imgStatus={imgStatus} />
                        <CameraButton imgStatus={imgStatus} handleAddPhoto={handleAddPhoto} handleRemovePhoto={handleRemovePhoto} />
                    </Box>
                    <Divider sx={{ ml: 2, mr: 2, height: 240 }} variant='inset' orientation='vertical' flexItem />
                    <Box display="flex" flexDirection="column" gap={6}>
                        <Box display="flex" gap={1}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <BadgeSharp sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField name='document' required variant="standard" label="Documento" placeholder="Informe o documento da Pessoa" sx={{ width: 320 }} />
                            </Box>
                            <TextField required variant="standard" label="Tipo De Documento" select sx={{ width: 180 }} />
                        </Box>
                        <Box display="flex" gap={1}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <PersonSharp sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField required variant="standard" label="Nome" placeholder="Informe o Nome da Pessoa" sx={{ width: 320 }} />
                            </Box>
                            <TextField required variant="standard" label="Tipo de Cadastro" select sx={{ width: 180 }} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <CommentSharp sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField variant="standard" label="Observação" fullWidth />
                        </Box>

                    </Box>

                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
            </DialogActions>
        </Dialog>
    )
}

function Camera({ imgStatus }) {
    if (imgStatus === 0)
        return <video width={320} height={240}></video>

    if (imgStatus == 1) {
        return <img src="https://pm1.aminoapps.com/7547/72cab1effb13f6de0247ae271bc08a0e85ecbff7r1-900-1051v2_hq.jpg" width={320} height={240}></img>
    }

    if (imgStatus == 2) {
        return <canvas style={{ width: "320px", heigth: "240px" }}></canvas>
    }
}

function CameraButton({ imgStatus, handleAddPhoto, handleRemovePhoto }) {
    if (imgStatus === 0) {
        return <Button fullWidth color="primary" onClick={handleAddPhoto} startIcon={<CameraAltSharp />}>Tirar Foto</Button>
    }
    else {
        return <Button fullWidth color="error" onClick={handleRemovePhoto} startIcon={<DeleteSharp />}>Remover Foto</Button>
    }


}
