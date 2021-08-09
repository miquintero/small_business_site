import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
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
        <Helmet title="Magaly Schaeffer" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Welcome</h2>
                </header>
                <div>
                  <p>Are you feeling upset, uneasy, anxious, and disconnected? Struggling in your relationship? Easily dysregulated?</p> 
                  <p>My goal is to work together to unpack your experiences and help you identify the sources of your emotional pain, to help you heal and reconnect again.</p>
                  <p>I am a trauma-informed, multicultural, LGBTQIA friendly, Bilingual (Spanish) with 25 years of experience.</p>
                </div>
                <ul className="actions">
                  <li>
                    <Link to="/aboutme" className="button special">
                      About me
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>My Approach</h2>
            </header>
            <p>
            If you tend to get easily triggered by your past experiences and live with anxiety/depression with
            difficulty controlling your emotions, you might be suffering from trauma. Using EMDR and Sensorimotor Therapy clients will be able to process and integrate their
            traumas and live a fulfilled life. 
            </p>
            <p>
            If you find yourself depressed, arguing with
            your partner all the time, feeling trapped, disconnected, misunderstood, and sad. Using Imago
            therapy, couples will be able to understand, process, and accept their
            differences, identify their triggers, and learn to control their reactivity.
            They will learn to listen and communicate effectively, and hopefully rekindle
            their love for each other and feel connected again.  
            </p>
            <ul className="features">
              <li>
                <span className="image">
                  <img src={pic02} alt="" />
                </span>
                <h3>EMDR</h3>
                <p>
                An interactive psychotherapy technique used to relieve psychological stress. It is an effective treatment for trauma and post-traumatic stress disorder (PTSD).
                </p>
              </li>
              <li>
                <span className="image">
                  <img src={pic03} alt="" />
                </span>                
                <h3>Sensorimotor Therapy</h3>
                <p>
                Is designed to reduce the dysregulated autonomic arousal patterns that often hijack a client’s ability to remain cognitively connected during the treatment process.
                </p>
              </li>
              <li>
                <span className="image">
                  <img src={pic04} alt="" />
                </span> 
                <h3>Imago</h3>
                <p>
                  A form of relationship and couples therapy that focuses on transforming conflict into healing and growth through relational connection.
                </p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Areas of Expertise</h2>
            </header>
            <ul className="statistics">
              <li className="style1">
                <br></br>
                <strong>Couples</strong>Relationships
              </li>
              <li className="style2">
                <br></br>
                <strong>Anxiety</strong>
              </li>
              <li className="style3">
                <br></br>
                <strong>Trauma</strong>
              </li>
              <li className="style4">
                <br></br>
                <strong>Multiculturalism</strong>
              </li>
              <li className="style5">
                <br></br>
                <strong>Depression</strong>Hopelessness
              </li>
            </ul>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Contact Me</h2>
            </header>
              <p>
                <h3>Magaly Schaeffer, LPC, MBA</h3>
                <strong>Phone</strong><br></br>
                703-864-2926<br></br><br></br>
                <strong>Email</strong><br></br>
                  <a href = "mailto: magalyschaefferllc@gmail.com">magalyschaefferllc@gmail.com</a><br></br><br></br>
                <strong><a href="https://www.psychologytoday.com/us/therapists/magaly-schaeffer-llc-falls-church-va/64183">Psychology Today</a></strong>
             </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
