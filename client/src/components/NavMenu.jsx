import React, { useState } from "react";
import { Link } from 'react-router-dom'



const NavMenu = (props) => {

    const base = "http://localhost:3000/";
    const [open, setOpen] = useState(true);

    const onMouseEnter = () => {
        props.getValue(true)
        setOpen(true)
    }
    const onMouseLeave = () => {
        props.getValue(false)
        setOpen(false)
    }
    return (
        <div className="dropmenu" onMouseEnter={() => onMouseEnter()} onMouseLeave={onMouseLeave} >
            <ul>
            { open ? 
                 props.data.map((e,i) => <li key={'li'+i}><Link className="link" to={e.to} key={'link'+i}>{e.text}</Link></li>)
           : null}
             </ul> 
        </div>
    )
}

export default NavMenu;