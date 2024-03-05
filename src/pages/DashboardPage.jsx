import React from "react"
import { Link, useRouteLoaderData } from "react-router-dom";


export function Dashboard() {
    let { user } = useRouteLoaderData("root");
    return (
        <React.Fragment>
            <h1>Dashboard</h1>
            Bem vindo: {user.email}
            Bem vindo: {user.companyName? user.companyName : "Sem nome"}
            <Link to="/">Home</Link>
            <Link to="/confirmacao">Confirmacao</Link>
        <Link to="/logout">Log Out</Link>
        </React.Fragment>
    )
}