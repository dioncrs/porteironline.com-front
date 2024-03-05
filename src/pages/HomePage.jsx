import React from "react"
import { Link } from "react-router-dom"

export function HomePage() {
    return (
        <React.Fragment><h1>Página Inicial</h1>
            <Link to="/login">Log in</Link>
            <Link to="/app/dashboard">Dashboard</Link>
            <Link to="/logout">Log Out</Link>
        </React.Fragment>
    )
}