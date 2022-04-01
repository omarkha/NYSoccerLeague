import React from "react";
import Button from "./Button";

const Club = (props) => {
    return (
        <div class="result">
            <h3>{props.clubname}</h3>
            <p>{props.clubcity} <br/>
            {props.clubmanager}</p>
            <Button text="modify" />
        </div>
    )
}

export default Club;