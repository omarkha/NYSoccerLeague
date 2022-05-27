import React, { useState } from "react";
import { Link } from 'react-router-dom'
import NavMenu from "./NavMenu";

const NavBar = () => {

    const databaseDropmenu = [
        {to: 'leaguespage', text: 'Leagues'},
        {to: 'clubspage', text: 'Clubs'},
        {to: 'playerspage', text: 'Players'}
    ];

    const  [open, setOpen] = useState(false);

    const getValue = (value) => {
        setOpen(value);
    }
    return (
        <nav className="navbar">
            <ul>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="aboutpage">About</Link></li>

                
                
            <li><Link className="link" to="#" onMouseEnter={() => setOpen(true)}>Database</Link></li>
           
            { open ?  
            <NavMenu data={databaseDropmenu} getValue={getValue} />
           : null}



            </ul>
                
                
                
        </nav>

        
    )
}

export default NavBar;