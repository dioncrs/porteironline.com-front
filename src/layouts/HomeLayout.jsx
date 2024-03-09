import {Fragment, useContext} from 'react';
import { Navigate, Outlet, useOutletContext } from 'react-router-dom'
import Box from '@mui/material/Box';



export const HomeLayout = () => {
    const [ user, setUser ] = useOutletContext()

    if (user) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <Fragment>
            <Box sx={{ marginTop: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Outlet context={[user, setUser]} />
            </Box>
        </Fragment>
    )
}