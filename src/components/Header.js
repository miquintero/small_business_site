import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Magaly Schaeffer</h1>
        <p>Bicultural Bilingual Imago Psychotherapist<br />
        design by <a href="https://html5up.net">HTML5 UP</a>.</p>
    </header>
)

export default Header
