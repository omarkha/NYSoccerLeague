import React from "react";
import { useState } from "react";
import Club from "./Club";
import DropMenu from "./DropMenu";
import axios from 'axios';
import { componentDidMount } from 'axios';


const Clubs = () => {

    const [data,setData] = useState(
        {
            name: '',
            county: '',
            city: '',
        }
    );


    const [name, setName] = useState('');
    const [county, setCounty] = useState('');
    const [city, setCity] = useState('');

    const [counties, setCounties] = useState(['']);

    componentDidMount = () => {
        axios.get('http://localhost:3001/leagues/')
        .then(response => {
            
            setCounties(
                response.data.map((e, i) => e.county)
            );
        })
        .catch(err => console.log("rr: ",err))
    }

    const getValue = (value, id) =>{
        setCounty(value);
    }

    const handleAdd = () => {

        setData(data.name = name, data.county = county, data.city = city);

        const club = data;

        console.log(data);
        axios.post('http://localhost:3001/clubs/add', data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }


    return (
        <div className="main">
            <div className="club-input">
                <label>Club Name </label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="clubname" />
                <label>Club County </label>
                <DropMenu defaultText="Select County" getValue={getValue} value={counties} id="clubcounty" />
                <label>Club City </label>
                <input value={city} onChange={(e) => setCity(e.target.value)} type="text" id="clubcity" />
                
                <button className="club-input-button">Search</button>
                <button className="club-input-button" onClick={handleAdd}>Add</button>
                <button className="club-input-button">Update</button>
                <button className="club-input-button">Delete</button>
            </div>
            <div className="results">
                <Club clubname="FC Barcelona" clubcity="Barcelona" clubcounty="Orange County" />
            </div>
        </div>

    )
}

export default Clubs;