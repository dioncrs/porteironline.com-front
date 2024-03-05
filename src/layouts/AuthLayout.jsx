import * as React from 'react';
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export function AuthLayout() {
    return (
        <React.Fragment>
                <Box sx={{ marginTop: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Outlet />
                </Box>
        </React.Fragment>
    )
}