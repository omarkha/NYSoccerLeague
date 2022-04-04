import React from "react";

const Player = (props) => {

    return (
        <div className="result">
            <h3>{props.firstname} {props.lastname}</h3>
            <p>{props.club} <br/>
            {props.foot} Footed | {props.position} | {props.age} y/o | {props.height} <br/>
            {props.weight} | {props.county} | {props.city} <br/>
            {props.email} <br/>
            {props.phone}</p>
            <button>Modify</button>
            <button>Remove</button>
        </div>
    )
}

export default Player;