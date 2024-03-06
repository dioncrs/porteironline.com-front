import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import { useAuth } from '@/hooks/useAuth'


export const HomeLayout = () => {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <React.Fragment>
            <Box sx={{ marginTop: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Outlet />
            </Box>
        </React.Fragment>
    )
}