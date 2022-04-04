import React from "react";
import { useState } from "react";

const DropMenu = (props) => {
    
    const [selection, setSelection] = useState('none');
    
    const id = props.id;

    props.getValue(selection);
    
    return (
    
        <select key={id} onChange={(e) => setSelection(e.target.value)} >
            <option selected>{props.defaultText}</option>
            {props.value.map((element, index) => 
                <option value={element} key={index}>{element}</option>
            )}
        </select>
    )

}

export default DropMenu;