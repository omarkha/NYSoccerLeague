import React from "react";
import DropMenu from "./DropMenu";
import Player from "./Player";
import { useState, useEffect } from "react";
import axios from "axios";



const Players = () => {

    const positions = ['GK','LB','CB','RB','CM','CDM','CAM','RM','LM','LW','RW','AM','CF'];

    const foots = ['Left','Right','Both'];

    const heights = ['4\'8','4\'9','4\'10','4\'11','5\'0','5\'1','5\'2','5\'3','5\'4','5\'5','5\'6','5\'7','5\'8','5\'9','5\'10','5\'11','6\'0','6\'1','6\'2','6\'3','6\'4','6\'5','6\'6','6\'7'];

    const weights = ['70 lb', '71 lb', '72 lb', '73 lb', '74 lb', '75 lb', '76 lb', '77 lb', '78 lb', '79 lb', '80 lb', '81 lb', '82 lb', 
    '83 lb', '84 lb', '85 lb', '86 lb', '87 lb', '88 lb', '89 lb', '90 lb', '91 lb', '92 lb', '93 lb', '94 lb', '95 lb', '96 lb', '97 lb',
     '98 lb', '99 lb', '100 lb', '101 lb', '102 lb', '103 lb', '104 lb', '105 lb', '106 lb', '107 lb', '108 lb', '109 lb', '110 lb', '111 lb',
      '112 lb', '113 lb', '114 lb', '115 lb', '116 lb', '117 lb', '118 lb', '119 lb', '120 lb', '121 lb', '122 lb', '123 lb', '124 lb', '125 lb',
       '126 lb', '127 lb', '128 lb', '129 lb', '130 lb', '131 lb', '132 lb', '133 lb', '134 lb', '135 lb', '136 lb', '137 lb', '138 lb', 
       '139 lb', '140 lb', '141 lb', '142 lb', '143 lb', '144 lb', '145 lb', '146 lb', '147 lb', '148 lb', '149 lb', '150 lb', '151 lb', 
       '152 lb', '153 lb', '154 lb', '155 lb', '156 lb', '157 lb', '158 lb', '159 lb', '160 lb', '161 lb', '162 lb', '163 lb', '164 lb', 
       '165 lb', '166 lb', '167 lb', '168 lb', '169 lb','170 lb','171 lb','172 lb','173 lb','174 lb','175 lb','176 lb','177 lb','179 lb','180 lb','181 lb',
       '172 lb','173 lb','174 lb','175 lb','176 lb','177 lb','178 lb','179 lb','180 lb','181 lb','182 lb','183 lb','184 lb','185 lb','186 lb',
       '187 lb','188 lb','189 lb','190 lb','191 lb','192 lb','193 lb','194 lb','195 lb','196 lb','197 lb','198 lb','199 lb','200 lb','201 lb','202 lb',
       '203 lb','204 lb','205 lb','206 lb','207 lb','208 lb','209 lb','210 lb','211 lb','212 lb','213 lb','214 lb','215 lb','216 lb','217 lb','218 lb','219 lb',
       '220 lb'];


        const [clubs, setClubs] = useState([]);
        const [leagues, setLeagues] = useState([]);
        const [players, setPlayers] = useState([]);
   
        const base = "https://boiling-caverns-15602.herokuapp.com";

        const [data, setData] = useState({
            firstname: '',
            lastName: '',
            position: '',
            club: '',
            foot: '',
            county: '',
            city: '',
            age: 0,
            height: '',
            weight: '',
            email: '',
            phone: '',
       });
   
       const [firstname, setFirstname] = useState('');
       const [lastname, setLastname] = useState('');
       const [age, setAge] = useState(0);
       const [position, setPosition] = useState('');
       const [foot, setFoot] = useState('');
       const [club, setClub] = useState('');
       const [county, setCounty] = useState('');
       const [city, setCity] = useState('');
       const [height, setHeight] = useState('');
       const [weight, setWeight] = useState('');
       const [email, setEmail] = useState('');
       const [phone, setPhone] = useState('');
       const [id, setId] = useState('');

    const getLeagues = () => {
        axios.get(`${base}/leagues/`)
        .then(response => {
            
            setLeagues(
                response.data.map((e, i) => e.county)
            );
        })
        .catch(err => console.log("rr: ", err))
    }

    useEffect(getLeagues, []);

    const getClubs = (value) => {
        console.log(county);

        const league = value + " ASL";

        axios.get(`${base}/clubs/league/${league}`)
        .then(response => {

            setClubs(
                response.data.map((e, i) => e.name)
            );

            console.log(clubs);

        })
        .catch(err => console.log("Err: ", err))
        
    }

    const setPlayer = () => {
        const newData = {
            'firstname': firstname, 
            'lastname': lastname, 
            'age': age, 
            'position': position, 
            'foot': foot, 
            'club': club, 
            'county': county, 
            'city': city, 
            'height': height, 
            'weight': weight, 
            'email': email, 
            'phone': phone
         };
        setData(newData);

    console.log(newData);
    console.log(firstname);
    }

    const handleSearch = () => {

        setPlayer();

        console.log(data);

        if((firstname !== '' && lastname !== '')){
            axios.get(`${base}/players/${firstname}/${lastname}`)
            .then(response => {
                const newData = response.data.sort((a, b) => { return (a.firstname > b.firstname) ? 1 : -1});
                setPlayers(newData);
            })
            .catch(err => console.log(err))
        }else if((club !== '' && club !== 'Select Club') && (firstname === '' && lastname === '')){
            getValue();
            axios.get(`${base}players/${club}`)
            .then(response => {
                const newData = response.data.sort((a, b) => { return (a.firstname > b.firstname) ? 1 : -1});
                setPlayers(newData);
                console.log(players);
            })
            .catch(err => console.log("Err: ", err))
        }else if((firstname !== '' && lastname === '') && (club === 'Select Club' || club === '')){
            getValue();
            axios.get(`${base}/players/firstname/${firstname}`)
            .then(response => {
                const newData = response.data.sort((a, b) => { return (a.firstname > b.firstname) ? 1 : -1});
                setPlayers(newData);
                console.log(players);
            })
            .catch(err => console.log("Err: ", err))
        }else if((firstname === '' && lastname !== '') && (club === 'Select Club' || club === '')){
            getValue();
            axios.get(`${base}/players/lastname/${lastname}`)
            .then(response => {
                const newData = response.data.sort((a, b) => { return (a.lastname > b.lastname) ? 1 : -1});
                setPlayers(newData);
                console.log(players);
            })
            .catch(err => console.log("Err: ", err))
        }
        
    } 

    const handleAdd = () => {
        const newData = {
            'firstname': firstname, 
            'lastname': lastname, 
            'age': age, 
            'position': position, 
            'foot': foot, 
            'club': club, 
            'county': county, 
            'city': city, 
            'height': height, 
            'weight': weight, 
            'email': email, 
            'phone': phone
         };
        console.log(data);
        axios.post(`${base}/players/`, newData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    const handleUpdate = () => {
        const player = {"newFirstname": firstname, "newLastname": lastname, "newAge": age, 
        "newPosition": position, "newFoot": foot, "newClub":club, "newCounty":county, "newCity":city, 
        "newHeight": height, "newWeight":weight, "newEmail": email, "newPhone":phone, "_id": id};

        console.log(player);
        axios.put(`${base}/players/update/${id}`, player)
        .then(res => {
            console.log("player updated")
        }).catch(err => console.log("ErRoR DeTeCtEd p: ", err))
    }

    const getValue = (value, id) => {

        if(id === "clubs"){
            setClub(value)
        }else if(id === "positions"){
            setPosition(value)
        }else if(id === "heights"){
            setHeight(value);
        }else if(id === "weights"){
            setWeight(value);
        }else if(id === "foots"){
            setFoot(value);
        }else if(id === "leagues"){
            setCounty(value);
        }
        
    }

    const onLeagueChange = (value) => {
        getClubs(value);
    }

    const handleDelete = (id) => {
        const newPlayers = players.filter(p => p._id !== id);
            setPlayers(newPlayers);

            axios.delete(`${base}/players/${id}`)
            .then(res => {
                console.log(" deleted from database: ", id);
            })
            .catch(err => console.log(err))
    }



    const handleModify = (xfirstname, xlastname, xposition, xclub, xfoot, xcounty, xcity, xage, xheight, xweight, xemail, xphone, xid) => {

            setFirstname(xfirstname)
            setLastname(xlastname)
            setPosition(xposition)
            setClub(xclub)
            setFoot(xfoot)
            setCounty(xcounty)
            setCity(xcity)
            setAge(xage)
            setHeight(xheight)
            setWeight(xweight)
            setEmail(xemail)
            setPhone(xphone)
            setId(xid);
            
    }

    return (
        <div className="main">
            <div className="input-area">
                <div className="input-area-1">
                    <label> County </label>
                    <DropMenu onLeagueChange={onLeagueChange} defaultText="Select League"  value={county} content={leagues} getValue={getValue} id="leagues" />
                    <label> Club </label>
                    <DropMenu defaultText="Select Team"  value={club} content={clubs} getValue={getValue} id="clubs"   />
                    <label> First Name </label>
                    <input value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text"/>
                    <label> Last Name </label>
                    <input value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" />
                    <label> Age </label>
                    <input value={age} onChange={(e) => setAge(e.target.value)} type="text" />
                    <label> City </label>
                    <input value={city} onChange={(e) => setCity(e.target.value)} type="text"  />
                    <button onClick={handleSearch}>Search</button>
                    <button onClick={handleAdd}>Add</button>
                </div>
                <div className="input-area-2">
                    <label> Position </label>
                    <DropMenu defaultText="Select Position" id="positions" getValue={getValue} value={position} content={positions} />
                    <label> Strong Foot </label>
                    <DropMenu defaultText="Select Foot" id="foots" getValue={getValue} value={foot} content={foots} />
                    <label> Height </label>
                    <DropMenu defaultText="Select Height" id="heights" getValue={getValue} value={height} content={heights} />
                    <label> Weight </label>
                    <DropMenu defaultText="Select Weight" id="weights" getValue={getValue}  value={weight} content={weights} />
                    <label> Email </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text"  />
                    <label> Phone </label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" />
                    <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
        <div className="results">
        <div className="results-header"> <h3>Players</h3></div>
            { players.map(e => ( <Player handleDelete={handleDelete} handleModify={handleModify} key={e._id} id={e._id} firstname={e.firstname} lastname={e.lastname} age={e.age} club={e.club} position={e.position} height={e.height} weight={e.weight} county={e.county} city={e.city} phone={e.phone} email={e.email} foot={e.foot}/> )) }
        </div>
    </div>
    )
}

export default Players;