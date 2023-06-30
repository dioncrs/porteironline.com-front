import React from "react";
import { Box, Icon, Typography } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUserOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

export function Loogotipo() {
    return(
        <Box sx={{ display: "flex",alignItems: "center",justifyContent: "center", gap: "8px",width: "100%",}}>
            <VerifiedUserIcon style={{ color: "#81c784" }} fontSize="large"/>
            <Typography variant="h7"style={{ color: "#757575" }}fontWeight="bold"component="div">
                Portaria.org
            </Typography>
        </Box>
    )
}