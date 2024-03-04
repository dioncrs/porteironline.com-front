import * as React from 'react';
import { Outlet } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './AuthLayout.css'

export function AuthLayout() {
    return (
        <React.Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginTop: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Outlet />
                </Box>
            </Container>
        </React.Fragment>
    )
}