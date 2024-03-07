import { useAuth } from "@/hooks/useAuth";
import { Button } from "@mui/material";
import React from "react"
import { Link } from "react-router-dom";


export function Dashboard() {
    const { user, logout } = useAuth();

    async function handleLogout(){
        await logout()
    }

    return (
        <React.Fragment>
            <h1>Dashboard</h1>
            Bem vindo: {user.email}
            Bem vindo: {user.displayName}
            <Link to="/">Home</Link>
            <Link to="/confirmacao">Confirmacao</Link>
        <Button onClick={handleLogout}>Log Out</Button>
        </React.Fragment>
    )
}