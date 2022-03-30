import React from "react";
import Textbox from "./Textbox";

const Instructions = (props) => {
    return (
        <div class="instructions">
            <h3>Instructions</h3>
            <p>
                Enter the players information who you wish to enroll in a club. Then click "Add Player" to submit.
                <br/><br/>
                To search for players within clubs, click on the 'Search' link in the navigation bar.
                <br/><br/>
                Learn more about us by clicking on the 'About' link in the navigation bar.
            </p>
        </div>
    )
}

export default Instructions;