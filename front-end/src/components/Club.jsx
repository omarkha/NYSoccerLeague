import React from "react";
import Button from "./Button";

const Club = () => {
    return (
        <div class="main">
            <div class="club-input">
                <label>Club Name </label>
                <input type="text" id="clubname" />
                <label>Club City </label>
                <input type="text" id="clubcity" />
                <label>Club Manager </label>
                <input type="text" id="clubmanager" />
                <Button text="Add" />
                <Button text="Delete" />
                <Button text="Update" />
            </div>
        </div>
    )
}

export default Club;