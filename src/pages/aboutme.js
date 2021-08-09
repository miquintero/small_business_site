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
            international organizations. My work took me to Venezuela, Bolivia, and North
            Korea. My counseling career began in 1996, in
            Atlanta where I counseled low-income patients with chronic mental illness. This
            opportunity allowed me discover my passion for helping people develop self-awareness and experience the magical
            results of uncovering their inner strengths.</p>
            <p>I, then, opened my private practice and counseled a diverse group of individuals and couples with multiple
            issues, anxiety, depression, and trauma. In the same period, I helped
            create the Hispanic Mental Health Department for Positive Impact. This department
            provided individual and couples counseling to clients living with
            HIV/AIDS.
            </p>
            <p>
            After the September 11th terrorist attack I was given the opportunity to
            counsel and debrief traumatized and grieving survivors in New York City.
            </p>
            <p>
            When I was living in La Paz, Bolivia I provided pro-bono therapy to inmates at a women’s jail where they lived with their children.
            </p>
            <p>Since 2007, I have lived in Northern Virginia first working part-time
            at the Whitman Walker Clinic and since 2009 I have maintained a private practice.
            Currently I only work via tele-health and I use multiple methodologies including Imago, EMDR, Sensorimotor
            Therapy, and internal family systems.
            </p>          
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
