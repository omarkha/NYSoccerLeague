import React from "react";

const League = ({handleRemove, county, id}) => {

    return (
        
            
                <div className="result">

                    <h3>{county} ASL</h3 >
                    
                    <button onClick={() => {handleRemove(id)}}>remove</button>

                </div>
        
    
    )
}

export default League;