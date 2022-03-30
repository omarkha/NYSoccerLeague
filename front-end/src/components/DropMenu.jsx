import React from "react";

const DropMenu = (props) => {
    return (
        
        <select>
            <option value="none" selected>none</option>
            {props.value.map((element, index) => 
                <option value={element}>{element}</option>
            )}
        </select>
    )

}

export default DropMenu;