import React from "react";
import { useState } from "react";

const DropMenu = (props) => {
    
    const [selection, setSelection] = useState('');
    
    const id = props.id;

    
    props.getValue(selection, props.id);

    return (
    
        <select key={props.id} value={props.value} id={props.id} onChange={(e) => {
            setSelection(e.target.value)
            if(id === "leagues"){
                props.onLeagueChange(e.target.value);
            }
        }} >
            <option selected>{props.defaultText}</option>
            
            {props.content.map((element, index) => 
                <option value={element} selected={props.value === props.content[index]} key={index}>{element}</option>
            )}
        </select>
    )

}

export default DropMenu;