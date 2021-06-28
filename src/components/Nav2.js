import { Link } from 'gatsby'
import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav2 = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <Link to="/home" type="id" element="intro">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/home#first" type="id" element="first">
                    My Approach
                </Link>
            </li>
            <li>
                <Link to="/home#second" type="id" element="second">
                    Areas of Expertise
                </Link>
            </li>
            <li>
                <Link to="/home#cta" type="id" element="cta">
                    Contact Me
                </Link>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav2
