import { Box } from "@mui/material";

export const Centralize = ({children}) => {
    return (

                <Box sx={{ marginTop: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {children}
                </Box>

    )
}