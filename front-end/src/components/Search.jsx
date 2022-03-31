import React from "react";
import Textbox from "./Textbox";
import DropMenu from "./DropMenu";
import Button from "./Button";
import Result from "./Result";

const Search = () => {
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

    const weight = ['70 lb', '71 lb', '72 lb', '73 lb', '74 lb', '75 lb', '76 lb', '77 lb', '78 lb', '79 lb', '80 lb', '81 lb', '82 lb', 
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


    return (
        <div class="main">
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
                <DropMenu value={weight} />
                <label> Email </label>
               <Textbox />
                <label> Phone </label>
                <Textbox />
                <Button text="Search" />
                <Button text="Update" />
            </div>
        </div>
        <div class="results">
            <Result firstname="Omar" lastname="Khalil" age="25" club="FC New Paltz" position="CAM" height="5'8" weight="155 lb"county="Ulster" city="New Paltz" phone="8457065330" email="omareldagestany@outlook.com" foot="Right"/>
            <Result firstname="Omar" lastname="Khalil" age="25" club="FC New Paltz" position="CAM" height="5'8" weight="155 lb"county="Ulster" city="New Paltz" phone="8457065330" email="omareldagestany@outlook.com" foot="Right"/>
            <Result firstname="Omar" lastname="Khalil" age="25" club="FC New Paltz" position="CAM" height="5'8" weight="155 lb"county="Ulster" city="New Paltz" phone="8457065330" email="omareldagestany@outlook.com" foot="Right" />
        </div>
    </div>
    )
}

export default Search;