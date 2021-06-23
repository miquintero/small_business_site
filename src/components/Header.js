import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Magaly Schaeffer</h1>
        <p>Bicultural Bilingual Imago Psychotherapist<br />
        Spanish</p>
    </header>
)

export default Header
