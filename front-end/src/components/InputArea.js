import React from "react";
import Textbox from "./Textbox";
import DropMenu from "./DropMenu"
import Button from "./Button";

const InputArea = () => {

    const teams = ['FC New Paltz',
        'FC Poughkeepsie',
        'FC Woodstock',
        'FC Kingston Knights',
        'FC Middletown',
        'FC Saugerties Eagles',
        'FC Hydepark Rangers',
        'FC Rhinebeck United',
        'FC Rosendale',
        'FC New Burgh Gunners',
        'FC Hurley Kings',
        'FC Stone Ridge Wanderers',
        'FC Real Ellenville',
        'FC Gardner Farmers',
        'FC Mohonk Climbers',
        'FC Minawaska'];

    const positions = ['GK','LB','CB','RB','CM','CDM','CAM','RM','LM','LW','RW','AM','CF'];

    const foot = ['Left','Right','Both'];

    const height = ['4\'8','4\'9','4\'10','4\'11','5\'0','5\'1','5\'2','5\'3','5\'4','5\'5','5\'6','5\'7','5\'8','5\'9','5\'10','5\'11','6\'0','6\'1','6\'2','6\'3','6\'4','6\'5','6\'6','6\'7'];
    return (
        <div className="input-area">
                <div className="input-area-1">
                <label> First Name </label>
                <Textbox />
                <label> Last Name </label>
                <Textbox />
               <label> Age </label>
               <Textbox />
               <label> County </label>
               <Textbox />
                <label> City </label>
                <Textbox />
                <label> Club </label>
                <DropMenu value={teams} />
                
            </div>
            <div className="input-area-2">
                <label> Position </label>
                <DropMenu value={positions} />
                <label> Strong Foot </label>
                <DropMenu value={foot} />
                <label> Height </label>
                <DropMenu value={height} />
                <label> Weight </label>
                <Textbox />
                <label> Email </label>
               <Textbox />
                <label> Phone </label>
                <Textbox />
                <Button text="Add Player" />
            </div>
        </div>
    )
}

export default InputArea;