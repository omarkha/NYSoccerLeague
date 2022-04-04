import React from "react";
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className="navbar">
            <div>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="aboutpage">About</Link>
                <Link className="link" to="leaguespage">Leagues</Link>
                <Link className="link" to="clubspage">Clubs</Link>
            </div>
        </nav>

        
    )
}

export default NavBar;