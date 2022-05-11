import React from "react";
import { useState, useEffect } from "react";
import Club from "./Club";
import DropMenu from "./DropMenu";
import axios from 'axios';


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
    const [id, setId] = useState('');
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

    const handleSearch = () => {
        if(county === "Select County"){
            getValue();
            axios.get('http://localhost:3001/clubs/')
            .then(res => {

                setClubs(res.data);
                console.log(clubs);
            })
            .catch(err => console.log("Err: ", err))
        }else{
            getValue();
            const league = county + " ASL";
            axios.get(`http://localhost:3001/clubs/${league}`)
            .then(res => {

                setClubs(res.data);
                console.log(clubs);
            })
            .catch(err => console.log("Err: ", err))
        }
        
        
    }

    const getValue = (value, id) =>{
        setCounty(value);
    }

    const handleAdd = () => {
        setData({name: name, county: county, city: city});
        const club = {
            name: name,
            county: county,
            city: city,
            league: county+" ASL",
        };

        console.log(data);
        axios.post('http://localhost:3001/clubs', club)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    const handleDelete = (id, county, city) => {
        const newClubs = clubs.filter(club => club._id !== id);
            setClubs(newClubs);

            axios.delete(`http://localhost:3001/clubs/${id}`)
            .then(res => {
                console.log(" deleted from database: ", id);
            })
            .catch(err => console.log(err))
    }
    const handleModify = (xname, xcounty, xcity, xid) => {
        setName(xname);
        setCounty(xcounty);
        setCity(xcity);
        setId(xid);
    }

    const handleUpdate = () => {
        const club = {"newName": name, "newCounty": county, "newLeague": county, "newCity": city, "_id": id};
        console.log(club);
        axios.put(`http://localhost:3001/clubs/update/${id}`, club)
        .then(res => {
            console.log("club updated")
        }).catch(err => console.log("ErRoR DeTeCtEd: ", err))
    }


    return (
        <div className="main">
            <div className="club-input">
            <label>Club County </label>
                <DropMenu defaultText="Select County" getValue={getValue} value={counties} id="clubcounty" />
                <label>Club City </label>
                <input value={city} onChange={(e) => setCity(e.target.value)} type="text" id="clubcity" />
                <label>Club Name </label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="clubname" />
                <div className="buttons">
                <button className="club-input-button" onClick={handleSearch}>Search</button>
                <button className="club-input-button" onClick={handleAdd}>Add</button>
                <button className="club-input-button" onClick={handleUpdate}>Update</button>
                </div>
            </div>
            <div className="results">
                { clubs.map((club) => <Club handleModify={handleModify} handleDelete={handleDelete}clubname={club.name} clubcity={club.city} clubcounty={club.county} key={club._id} id={club._id}/>)}
               
            </div>
        </div>

    )
}

export default Clubs;