import React from 'react';

import 'react-skeleton-css/styles/skeleton.2.0.4.css'
import 'react-skeleton-css/styles/normalize.3.0.2.css';
import './App.scss';

import placeholderDesktopHD from './img/desktop-hd.jpg'
import placeholderDesktop from './img/desktop.jpg'
import placeholderTablet from './img/tablet.jpg'

function App() {
  return (
    <main>
      <section className="container">
        <div className="row">
          <h1>App Heading</h1>
        </div>
        <div className="row">
          <div className="three columns">App</div>
          <div className="three columns">App</div>
          <div className="three columns">App</div>
          <div className="three columns">App</div>
        </div>
        <div className="row">
          <div className="one columns">space</div>
          <div className="ten columns">
            <button className="button-primary">My Button</button>
          </div>
          <div className="one columns">space</div>
        </div>
      </section>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <img className="u-max-full-width" src={placeholderDesktopHD} alt="Placeholder" />
            </div>
          </div>
          <div className="row">
            <div className="six columns">
              <img className="u-max-full-width" src={placeholderTablet} alt="Placeholder" />
            </div>
            <div className="six columns">
              <img className="u-max-full-width" src={placeholderTablet} alt="Placeholder" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
