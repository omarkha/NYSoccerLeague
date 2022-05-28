import React from "react";

const Club = ({handleDelete, handleModify, clubname, clubcounty, clubcity, clubemail, clubphone, cluburl, id}) => {
    return (
        <div className="result-club">

            <div className="result-club-div">
                <img className="clublogo" src={cluburl} alt={clubname} key={'img'+id}/>
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
            <div className="result-buttons">
            <button onClick={() => handleModify(clubname, clubcounty, clubcity, clubemail, clubphone, cluburl, id)}>modify</button>
            <button onClick={() => {handleDelete(id, clubcounty, clubcity)}}>remove</button>
            </div>
        </div>
    )
}

export default Club;



