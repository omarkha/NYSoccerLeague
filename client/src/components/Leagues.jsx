import React from "react";
import { useState } from "react";
import DropMenu from "./DropMenu";
import axios from 'axios';
import League from "./League";

const Leagues = () => {


    const [selectedCounty, setSelectedCounty] = useState('');

    const counties = [
    'All Leagues', 
    'Albany County',
    'Allegany County',
    'Bronx County',
    'Broome County',
    'Cattaraugus County',
    'Cayuga County',
    'Chautauqua County',
    'Chemung County',
    'Chenago County',
    'Clinton County',
    'Columbia County',
    'Cortland County',
    'Delaware County',
    'Dutchess County',
    'Erie County',
    'Essex County',
    'Franklin County',
    'Fulton County',
    'Genesee County',
    'Greene County',
    'Hamilton County',
    'Herkimer County', 
    'Jefferson County', 
    'Kings County', 
    'Lewis County', 
    'Livingston County', 
    'Madison County', 
    'Monroe County', 
    'Montgomery County', 
    'Nassau County', 
    'New York County', 
    'Niagara County', 
    'Oneida County', 
    'Onondaga County', 
    'Ontario County', 
    'Orange County', 
    'Orleans County', 
    'Oswego County', 
    'Otsego County',
    'Putnam County',
    'Queens County', 
    'Rensselaer County',
    'Richmond County',
    'Rockland County',
    'Saint Lawrence County',
    'Saratoga County',
    'Schenectady County',
    'Schoharie County',
    'Schuyler County',
    'Seneca County',
    'Steuben County',
    'Suffolk County',
    'Sullivan County',
    'Tioga County',
    'Tompkins County',
    'Ulster County', 
    'Warren County', 
    'Washington County', 
    'Wayne County', 
    'Westchester County',
    'Wyoming County', 
    'Yates County',];

    const [leagues, setLeagues] = useState([]);
    
        const uri = "https://boiling-caverns-15602.herokuapp.com";

    let returned = [];

        const getValue = (value) => {
            console.log(value)
            setSelectedCounty(value);
        }

        const handleAdd = () => {   
            const league = {county: selectedCounty};
            console.log(league);
            axios.post(`${uri}/leagues`, league)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }

        const handleSearch = (a) => {
            getValue();
            if(selectedCounty === "All Leagues"){
                axios.get(`${uri}/leagues`)
                .then(res => {
                    
                    console.log("123123123 ++ ");
                    setLeagues(res.data);
                    console.log(leagues);
                })
                .catch(err => console.log("Err: ", err))
            }else if(selectedCounty !== "All Leagues" && selectedCounty !== "Select County"){
                axios.get(`${uri}/leagues/findone/${selectedCounty}`)
                .then(res => {
                    
                    setLeagues(res.data);
                    console.log(leagues)
               
                })
                .catch(err => console.log(err))
            }
        }

    

        const handleRemove = (id) => {
            const newLeagues = leagues.filter(league => league._id !== id);
            setLeagues(newLeagues);

            axios.delete(`https://boiling-caverns-15602.herokuapp.com/leagues/${id}`)
            .then(res => {
                console.log(" deleted from database: ", id);
            })
            .catch(err => console.log(err))
        }
    return (
        <div className="main">
            <div className="club-input">
                <label>League County </label>
                <DropMenu defaultText="Select County" getValue={getValue} value={selectedCounty} content={counties} id="leaguecounty" />
                <div className="buttons">
                <button className="club-input-button" onClick={handleSearch}>Search</button>
                <button className="club-input-button" onClick={handleAdd}>Add</button>
                <button className="club-input-button">Delete</button>
                </div>
            </div>
            <div className="results">
                <div className="results-header"> <h3>Leagues</h3></div>
               

            { leagues.map((lig) => <League handleRemove={handleRemove} county={lig.county} key={lig._id} id={lig._id} /> ) }
            
            
            </div>
        </div>
    )
}

export default Leagues;