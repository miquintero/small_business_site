import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
            <h2>Background</h2>
              <p>I have always dreamed of being a psychotherapist but for a variety of reasons I studied business and worked for international organizations for a number of years in Venezuela, Bolivia, North Korea, and the United States. In 1996, I enrolled in the Psychology Program at the University of West Georgia and graduated with a Masters degree in Humanistic Psychology.</p>
              <p>My counseling career began in 1996, in Atlanta where I counseled low-income patients with chronic mental illness. This opportunity allowed me to gain a better understanding of mental illness and the impact of medication. I discovered my passion for helping people uncover their inner strengths, be more aware of themselves, and experience the magical results of their journey.</p>
              <p>As I gained more experience, I opened my private practice in Atlanta. I counseled a diverse group of individuals and couples with multiple issues, such as, marriage problems, anxiety, depression, trauma, and identity issues. I truly enjoyed my new field and found myself fascinated with my work with couples. In the same period, I helped create the Hispanic Mental Health unit for Positive Impact, Inc. This unit provided individual, couples and family counseling to clients diagnosed with HIV/AIDS.</p>
              <p>Also in Atlanta I worked as a Crisis Management Consultant for Crisis Management International. This job took me outside my office to assist clients in distress after a traumatic experience, such as, robbery, work accidents and attempted suicide in hotels and businesses. I worked via telephone with people all over the country, and I had the opportunity to travel to New York twice after the September, 11, 2001 terrorist attack to counsel and debrief traumatized, grieving survivors.</p>
              <p>In 2004, I began to specialize in couple’s therapy. I became a Certified Imago Relationship Therapist. Imago therapy was created by Harville Hendrix and Helen Hunt, authors of the book “Getting the Love You Want”, a national best seller describing a revolutionary new way of love. This training allowed me to counsel couples in a more effective way. I also had the opportunity to move to La Paz, Bolivia and to open my practice in my own culture for the first time. I relocated my office and counseled individuals and couples with multicultural issues and backgrounds. I also counseled inmates at a Women’s jail in La Paz as a volunteered.</p>
            <h2>Most recent experience</h2>
              <p>Since 2007, I have lived in Northern Virginia. I worked part-time at the Whitman Walker Clinic, for the Northern Virginia Family Services at their Multicultural Human Services unit, and opened my private practice in Falls Church-Virginia. Currently I have an active full time private practice.</p>
              <p>In 2012 and 2013 I completed the EMDR and Sensorimotor Training. These training are very helpful with my work on Trauma.</p>          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
