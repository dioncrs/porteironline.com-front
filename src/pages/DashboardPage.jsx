import useAppContext from "@/hooks/useAppContext";
import { logoutUser } from "@/services/UserService";
import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import { Link, useOutletContext } from "react-router-dom";


export function Dashboard() {
    const [ user, setUser ] = useOutletContext();

    async function handleLogout(){
        await logoutUser()
        setUser(null)
    }

    return (
        <Card elevation={3}>
            <CardContent>
            <Typography  color="primary" variant="h3" component="div">
            Dashboard
      </Typography>
                
            Bem vindo: {user.email}
            </CardContent>

        </Card>
    )
}