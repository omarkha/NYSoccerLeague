import React from "react";
import Club from "./Club";

const Clubs = () => {
    return (
        <div class="main">
            <div class="club-input">
                <label>Club Name </label>
                <input type="text" id="clubname" />
                <label>Club City </label>
                <input type="text" id="clubcity" />
                <label>Club Manager </label>
                <input type="text" id="clubmanager" />
                
                <button class="club-input-button">Search</button>
                <button class="club-input-button">Add</button>
                <button class="club-input-button">Update</button>
                <button class="club-input-button">Delete</button>
            </div>
            <div class="results">
                <Club clubname="FC Barcelona" clubcity="Barcelona" clubmanager="Xavi" />
            </div>
        </div>

    )
}

export default Clubs;