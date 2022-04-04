import React from "react";
import Button from "./Button";

const Club = (props) => {
    return (
        <div className="result">
            <h3>{props.clubname}</h3>
            <p>{props.clubcounty} <br/>
            {props.clubcity}</p>
            <button>modify</button>
            <button>remove</button>
        </div>
    )
}

export default Club;