import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Image from './components/Image/Image';

function App() {
  return (
      <Router>
        <div className="fullVP">
          <Header />
          <Image />
        </div>
        <Footer />
      </Router>
  );
}

export default App;
