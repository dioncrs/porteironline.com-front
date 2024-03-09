import useAppContext from "@/hooks/useAppContext";
import { logoutUser } from "@/services/UserService";
import { Button } from "@mui/material";
import { Link, useOutletContext } from "react-router-dom";


export function Dashboard() {
    const [ user, setUser ] = useOutletContext();

    async function handleLogout(){
        await logoutUser()
        setUser(null)
    }

    return (
        <>
            <h1>Dashboard</h1>
            Bem vindo: {user.email}
            Bem vindo: {user.displayName}
            <Link to="/">Home</Link>
            <Link to="/confirmacao">Confirmacao</Link>
        <Button onClick={handleLogout}>Log Out</Button>
        </>
    )
}