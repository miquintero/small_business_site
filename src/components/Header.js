import React from 'react'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Magaly Schaeffer, LPC, MBA</h1>
        <p>Multicultural Psychotherapist<br />
        magalyschaefferllc@gmail.com | (703)-864-2926<br />
        Virginia and Washington D.C.
        </p>
    </header>
)

export default Header
