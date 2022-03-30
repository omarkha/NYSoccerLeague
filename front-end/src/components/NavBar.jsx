import React from "react";
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className="navbar">
            <div>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="about">About</Link>
                <Link className="link" to="register">Register</Link>
                <Link className="link" to="search">Search</Link>
            </div>
        </nav>

        
    )
}

export default NavBar;