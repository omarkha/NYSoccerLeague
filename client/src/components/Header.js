import React from 'react'
import Images from "../images/index.js";

const Header = () => {
    return (
        <div className='header'>
            <a href="./"><img className="logo" alt="" src={Images.logo} />
            <h1> GreenStar Soccer League</h1></a>
        </div>
    )
}

export default Header;