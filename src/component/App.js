import React, { Component } from 'react';
import '../scss/App.scss';
import Header from './header';
import Footer from './footer';

const App = () => (
  <div className="App container">
    <Header title="Recipe Finder" />
    <div className="Body">
      Placeholder
    </div>
    <Footer />
  </div>
);

export default App;
