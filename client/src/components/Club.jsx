import React from "react";

const Club = ({handleDelete, handleModify, clubname, clubcounty, clubcity, clubemail, clubphone, id}) => {
    return (
        <div className="result">
            <h3>{clubname}</h3>
            <p>{clubcounty}, {clubcity}<br/>
            <br/>
            {clubemail}
            <br />
            {clubphone}
            </p>
            <button onClick={() => handleModify(clubname, clubcounty, clubcity, clubemail, clubphone, id)}>modify</button>
            <button onClick={() => {handleDelete(id, clubcounty, clubcity)}}>remove</button>
        </div>
    )
}

export default Club;



