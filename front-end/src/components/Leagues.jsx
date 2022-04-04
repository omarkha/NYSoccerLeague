import React from "react";
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

    const [county, setCounty] = useState('');

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

    const [returnedAll, setReturnedAll] = useState([]);

    const [searchedAll, setSearchedAll] = useState(false);

        const getValue = (value, id) => {
            setCounty(value)
        }

        const handleAdd = () => {
            setData({county: county});

            console.log(data);
            const club = data;
    
            console.log(data);
            axios.post('http://localhost:3001/leagues', data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }

        const handleSearch = (a) => {
            setSearchedAll(false)
    
            if(county === "All Leagues"){
                axios.get('http://localhost:3001/leagues')
                .then(res => {
                    setSearchedAll(true)
                    setReturnedAll(res.data);
                    map(res.data);
                })
                .catch(err => console.log("Err: ", err))
            }else{
                axios.get(`http://localhost:3001/leagues/${county}`)
                .then(res => {
                    setSearchedAll(true);
                    setReturnedAll(res.data);
                    map(res.data);
                })
                .catch(err => console.log(err))
            }
        }

        const map = (ar) => {
            console.log(ar);
            return ar.map((e, i) => {
                <League county={e.county} key={e.id} />
            });
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
                { searchedAll ? returnedAll.map((e) => <League county={e.county} key={e._id} /> ) : null }
            </div>
        </div>
    )
}

export default Leagues;