import React from "react";
import Button from "./Button";

const Result = (props) => {

    const onModify = () => {

    }
    
    return (
        <div class="result">
            <h3>{props.firstname} {props.lastname}</h3>
            <p>{props.club} <br/>
            {props.foot} Footed | {props.position} | {props.age} y/o | {props.height} <br/>
            {props.weight} | {props.county} | {props.city} <br/>
            {props.email} <br/>
            {props.phone}</p>
            <button>Modify</button>
        </div>
    )
}

export default Result;