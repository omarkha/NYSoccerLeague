import React from "react";

const Club = ({handleRemove, clubname, clubcounty, clubcity, id}) => {
    return (
        <div className="result">
            <h3>{clubname}</h3>
            <p>{clubcounty} <br/>
            {clubcity}</p>
            <button>modify</button>
            <button onClick={() => {handleRemove(id, clubcounty, clubcity)}}>remove</button>
        </div>
    )
}

export default Club;



