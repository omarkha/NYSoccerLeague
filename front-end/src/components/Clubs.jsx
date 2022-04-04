import React from "react";
import { useState, useEffect } from "react";
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

    const [clubs, setClubs] = useState([]);

    const getLeagues = () => {
        axios.get('http://localhost:3001/leagues/')
        .then(response => {
            
            setCounties(
                response.data.map((e, i) => e.county)
            );
        })
        .catch(err => console.log("rr: ",err))
    }

    useEffect(getLeagues, []);

    const handleUpdate = () => {
        console.log('update');
    }

    const handleDelete = () => {
        console.log('delete');
    }

    const handleSearch = () => {
        getValue();
            axios.get('http://localhost:3001/clubs/')
            .then(res => {

                setClubs(res.data);
                console.log(clubs);
            })
            .catch(err => console.log("Err: ", err))
        
    }

    const getValue = (value, id) =>{
        setCounty(value);
    }

    const handleAdd = () => {

        setData({name: name, county: county, city: city});

        console.log(data);
        axios.post('http://localhost:3001/clubs', data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    const handleRemove = (id, county, city) => {
        const newClubs = clubs.filter(club => club._id != id);
            setClubs(newClubs);

            axios.delete(`http://localhost:3001/clubs/${id}`)
            .then(res => {
                console.log(" deleted from database: ", id);
            })
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
                
                <button className="club-input-button" onClick={handleSearch}>Search</button>
                <button className="club-input-button" onClick={handleAdd}>Add</button>
                <button className="club-input-button" onClick={handleUpdate}>Update</button>
                <button className="club-input-button" onClick={handleRemove}>Remove</button>
            </div>
            <div className="results">
                { clubs.map((club) => <Club clubname={club.name} clubcity={club.city} clubcounty={club.county} key={club._id} id={club._id}/>)}
               
            </div>
        </div>

    )
}

export default Clubs;