import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faCalendar, faCloud, faUsers, faFile } from '@fortawesome/free-solid-svg-icons'

import citrusMedia from '../img/citrus-media.png';

const LandingPage = () => {
  return (
    <>
      {/* SHOWCASE */}
      <section className="section showcase">
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <h4 className="showcase-heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cupiditate.
              </h4>
              <a href="#" className="button button-primary">
                <FontAwesomeIcon icon={faDownload} /> Download Now
              </a>
            </div>
            <div className="one-half column">
              <img src={citrusMedia} alt="Citrus Media" className="showcase-img" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION A */}
      <div className="section section-a">
        <div className="container">
          <div className="row">
            <div className="one-third column">
              <FontAwesomeIcon icon={faCalendar} />
              <h5>Plan Your Life</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, obcaecati!</p>
            </div>
            <div className="one-third column">
              <FontAwesomeIcon icon={faCloud} />
              <h5>Upload to the Cloud</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, obcaecati!</p>
            </div>
            <div className="one-third column">
              <FontAwesomeIcon icon={faUsers} />
              <h5>Manage Users</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, obcaecati!</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION B */}
      <div className="section section-b">
        <div className="container">
          <h3 className="section-heading">Section Heading</h3>
          <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, necessitatibus!</p>
          <a href="#" className="button button-primary"><FontAwesomeIcon icon={faFile} /> View the Docs</a>
        </div>
      </div>

      {/* SECTION C */}
      <div className="section section-c">
        <div className="container">
          <h3 className="section-heading">
            Section Heading
          </h3>
          <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque itaque ipsam.</p>
        </div>
      </div>
    </>
  )
}

export default LandingPage
