import React from "react";
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav class="navbar">
            <div>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="about">About</Link>
                <Link className="link" to="clubs">Clubs</Link>
                <Link className="link" to="players">Players</Link>
            </div>
        </nav>

        
    )
}

export default NavBar;