import React from "react";
import { Box, Typography } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUserOutlined';

export function Logotipo() {
    return(
        <Box sx={{ display: "flex",alignItems: "center",justifyContent: "center", gap: "8px",width: "100%",}}>
            <VerifiedUserIcon fontSize="large"  color="primary"/>
            <Typography color="primary" fontWeight="bold" variant="h5">
                Porteiro Online
            </Typography>
        </Box>
    )
}