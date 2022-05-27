import React from "react";

const Club = ({handleDelete, handleModify, clubname, clubcounty, clubcity, clubemail, clubphone, clubimage, id}) => {
    return (
        <div className="result">

            <div className="result-image">
                <img src={clubimage} alt={clubname} />
            </div>
            <div className="result-info">
                <h3>{clubname}</h3>
                <p>{clubcounty}, {clubcity}<br/>
                <br/>
                {clubemail}
                <br />
                {clubphone}
                </p>
            </div>
            <button onClick={() => handleModify(clubname, clubcounty, clubcity, clubemail, clubphone, id)}>modify</button>
            <button onClick={() => {handleDelete(id, clubcounty, clubcity)}}>remove</button>
        </div>
    )
}

export default Club;



