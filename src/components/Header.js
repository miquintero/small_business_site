import React from 'react'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <div>
        <header id="header" className="alt">
            <span className="logo"><img src={logo} alt="" /></span>
            <h1>Magaly Schaeffer, LPC, MBA</h1>
            Multicultural Psychotherapist<br></br>
            magalyschaefferllc@gmail.com | (703)-864-2926<br></br>
            Virginia and Washington D.C.
        </header>
    </div>
)

export default Header
