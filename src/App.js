import React from 'react';
import { Helmet } from 'react-helmet';
// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Header } from './containers';
// import { CTA, Brand, Navbar } from './components';
import { Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <Helmet>
      <title>Tailors Suite | Tailors Management System</title>
    </Helmet>
    <div className="gradient__bg">
      <Navbar />
      <Header />
      {/* <BlendModeSlider /> */}
    </div>
    <Brand />
    {/* <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer /> */}
  </div>
);

export default App;
