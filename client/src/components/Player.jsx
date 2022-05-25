import React from "react";

const Player = (props) => {

    return (
        <div className="result" id="props.id">
            <h3>{props.firstname} {props.lastname}</h3>
            <p>{props.club} <br/>
            {props.foot} Footed | {props.position} | {props.age} y/o | {props.height} <br/>
            {props.weight} | {props.county} | {props.city} <br/>
            <span>
            {props.email} <br/>
            {props.phone}</span></p>

            <button onClick={(e) => props.handleModify(props.firstname, props.lastname, props.position, props.club, props.foot, props.county, props.city, props.age, props.height, props.weight, props.email, props.phone, props.id)}>Modify</button>
            <button onClick={(e) => props.handleDelete(props.id)}>Remove</button>
        </div>
    )
}

export default Player;
