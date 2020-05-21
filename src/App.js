import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Examples from './pages/Examples';
import LandingPage from './pages/LandingPage';

import 'react-skeleton-css/styles/skeleton.2.0.4.css'
// import 'react-skeleton-css/styles/normalize.3.0.2.css';
import './App.scss';

import placeholderDesktopHD from './img/desktop-hd.jpg'
import placeholderDesktop from './img/desktop.jpg'
import placeholderTablet from './img/tablet.jpg'


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/examples" component={Examples} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
