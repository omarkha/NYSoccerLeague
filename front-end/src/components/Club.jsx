import React from "react";

const Club = ({handleDelete, handleModify, clubname, clubcounty, clubcity, id}) => {
    return (
        <div className="result">
            <h3>{clubname}</h3>
            <p>{clubcounty} <br/>
            {clubcity}</p>
            <button onClick={() => handleModify(clubname, clubcounty, clubcity, id)}>modify</button>
            <button onClick={() => {handleDelete(id, clubcounty, clubcity)}}>remove</button>
        </div>
    )
}

export default Club;



