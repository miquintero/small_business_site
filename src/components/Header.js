import React from 'react'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <p>
            <h1>Magaly Schaeffer, LPC, MBA</h1>
            <p>Multicultural Psychotherapist</p>
            <p>magalyschaefferllc@gmail.com | (703)-864-2926</p>
            <p>Virginia and Washington D.C.</p>
        </p>
    </header>
)

export default Header
