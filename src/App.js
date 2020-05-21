import React from 'react';

import Headings from './components/Headings';
import Utilities from './components/Utilities';

import 'react-skeleton-css/styles/skeleton.2.0.4.css'
// import 'react-skeleton-css/styles/normalize.3.0.2.css';
import './App.scss';

import placeholderDesktopHD from './img/desktop-hd.jpg'
import placeholderDesktop from './img/desktop.jpg'
import placeholderTablet from './img/tablet.jpg'
import Buttons from './components/Buttons';
import Lists from './components/Lists';
import CodeBlock from './components/CodeBlock';
import Tables from './components/Tables';
import Forms from './components/Forms';
import Grid from './components/Grid';

function App() {
  return (
    <div className="container">
      <Headings />
      <Utilities />
      <Buttons />
      <Lists />
      <CodeBlock />
      <Tables />
      <Forms />
      <Grid />
    </div>
  );
}

export default App;
