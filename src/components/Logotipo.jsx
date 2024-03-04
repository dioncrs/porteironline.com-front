import React from "react";
import { Box, Typography } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUserOutlined';

export function Logotipo() {
    return(
        <Box sx={{ display: "flex",alignItems: "center",justifyContent: "center", gap: "8px",width: "100%",}}>
            <VerifiedUserIcon style={{ color: "#81c784" }} fontSize="large"/>
            <Typography style={{ color: "#757575" }}fontWeight="bold"component="div">
                Portaria.org
            </Typography>
        </Box>
    )
}