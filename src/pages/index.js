import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
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
        <Helmet title="Gatsby Starter - Stellar" />

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
                  <h2>About me</h2>
                </header>
                <div>
                  <p>Licensed psychotherapist in Virginia with over 20 years of experience.</p>
                  <p>I am a bicultural - bilingual (SPANISH) psychotherapist in practice since 1996. My Latin background, management/financial jobs abroad, and international experience has facilitated my work with clients of multiple intercultural and ethnic backgrounds. I am also, a certified Imago, EMDR and Sensorimotor Therapist and a Licensed professional counselor from Virginia.</p>
                </div>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
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
              <h2>Approaches</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Imago</h3>
                <p>
                  A form of relationship and couples therapy that focuses on transforming conflict into healing and growth through relational connection.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>EMDR</h3>
                <p>
                An interactive psychotherapy technique used to relieve psychological stress. It is an effective treatment for trauma and post-traumatic stress disorder (PTSD).
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Sensorimotor Therapy</h3>
                <p>
                Is designed to reduce the dysregulated autonomic arousal patterns that often hijack a client’s ability to remain cognitively connected during the treatment process.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Contact me
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Areas of expertise</h2>
              <p>
                If you find yourself depressed, arguing with your partner all the time, feeling trapped, disconnected, misunderstood, and sad, you might benefit from therapy. 
                If you tend to get easily trigger by your past negative experiences and live in a state of constant anxiety/depression without being able to control your emotions, you might be suffering from trauma.              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>Couples</strong>Relationships
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>Anxiety</strong>Excessive worry
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>Trauma</strong>PTSD
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>Biculturalism</strong>Culture Shock
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>Depression</strong>Hopelessness
              </li>
            </ul>
            <p className="content">
            If your relationship is no longer working, and you are thinking that perhaps the only solution is separation, there is hope and help for it. Using Imago, EMDR and Sensorimotor Therapy clients will be able to process and integrate their traumas and live a fulfilled life.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Availability</h2>
              <p>
                Not currently taking new clients. </p>
              <p>
                Contact me for referrals to psychotherapists and psychiatrists. 
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
