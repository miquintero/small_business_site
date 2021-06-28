import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Nav from '../components/Nav'
import Nav2 from '../components/Nav2'


import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic05 from '../assets/images/pic05.jpg'

class Generic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {

    return (
      <Layout>
        <Helmet title="About Me" />

        <HeaderGeneric />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav2 sticky={this.state.stickyNav} />

        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic05} alt="" /></span>
            <h2>Background</h2>
            <p>I have always dreamed of being a psychotherapist but for a variety of reasons I studied business and worked for
            international organizations for a number of years in Venezuela, Bolivia, North
            Korea, and the United States. My counseling career began in 1996, in
            Atlanta where I counseled low-income patients with chronic mental illness. This
            opportunity allowed me discover my passion for helping people uncover their
            inner strengths, be more aware of themselves, and experience the magical
            results of their journey.</p>
            <p>I opened my private practice in
            Atlanta. I counseled a diverse group of individuals and couples with multiple
            issues, anxiety, depression, trauma, and identity. In the same period, I helped
            create the Hispanic Mental Health unit for Positive Impact, Inc. This unit
            provided individual, couples and family counseling to clients diagnosed with
            HIV/AIDS.
            </p>
            <p>
            In Atlanta I worked as a Crisis
            Management Consultant assisting clients in distress after a traumatic
            experience via telephone assisting clients countrywide. I had the opportunity
            to travel to New York twice after the September 11, 2001 terrorist attack to
            counsel and debrief traumatized and grieving survivors.
            </p>
            <p>
            In 2004, I became a Certified Imago
            Relationship Therapist. This training allowed me to counsel couples more
            effectively. I also had the opportunity to move to La Paz, Bolivia and opened
            my practice practice. I also counseled inmates at a Women’s jail in La Paz as a
            volunteer.
            </p>
            <p>Since 2007, I have lived in Northern Virginia first working part-time
            at the Whitman Walker Clinic and since 2009 I have maintained a private practice.
            Currently I only work via tele-health.
            </p>
            <p>In the past ten years, I have strengthened my ability to work
            with clients who have experienced trauma through training in EMDR, Sensorimotor
            Therapy and internal family systems.
            </p>          
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
