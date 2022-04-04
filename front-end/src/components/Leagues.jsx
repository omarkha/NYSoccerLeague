import React, { useEffect } from "react";
import { useState } from "react";
import DropMenu from "./DropMenu";
import axios from 'axios';
import League from "./League";

const Leagues = () => {

    const [data, setData] = useState(
        {
            county: ''
        }
    )

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
    const [singleLeague, setSingleLeague] = useState({});
    let returned = [];

        const getValue = (value) => {
            console.log(value)
            setSelectedCounty(value);
        }

        const handleAdd = () => {   
            const league = {county: selectedCounty};
            console.log(league);
            axios.post('http://localhost:3001/leagues', league)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }

        const handleSearch = (a) => {
            getValue();
            if(selectedCounty === "All Leagues"){
                axios.get('http://localhost:3001/leagues')
                .then(res => {

                    setLeagues(res.data);
                    console.log(leagues);
                    returned = leagues;
                    returned.sort();
                })
                .catch(err => console.log("Err: ", err))
            }else if(selectedCounty !== "All Leagues" && selectedCounty !== "Select County"){
                axios.get(`http://localhost:3001/leagues/getone/${selectedCounty}`)
                .then(res => {
                    setLeagues([res.data]);
                    console.log(leagues)
                    console.log(singleLeague)
                })
                .catch(err => console.log(err))
            }
        }

    

        const handleRemove = (id) => {
            const newLeagues = leagues.filter(league => league._id != id);
            setLeagues(newLeagues);

            axios.delete(`http://localhost:3001/leagues/${id}`)
            .then(res => {
                console.log(" deleted from database: ", id);
            })
            .catch(err => console.log(err))
        }
    return (
        <div className="main">
            <div className="club-input">
                <label>League County </label>
                <DropMenu defaultText="Select County" getValue={getValue} value={counties} id="leaguecounty" />
                
                <button className="club-input-button" onClick={handleSearch}>Search</button>
                <button className="club-input-button" onClick={handleAdd}>Add</button>
                <button className="club-input-button">Delete</button>
            </div>
            <div className="results">


            { leagues.map((lig) => <League handleRemove={handleRemove} county={lig.county} id={lig._id} /> ) }
            
            
            </div>
        </div>
    )
}

export default Leagues;