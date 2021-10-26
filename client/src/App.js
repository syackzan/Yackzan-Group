import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Image from './components/Image/Image';

import AboutUs from './components/pages/AboutUs';
import Develop from './components/pages/Develop';
import Property from './components/pages/Property';
import Contact from './components/pages/Contact';

function App() {

  const [currentPage, setPage ] = useState('');

  const handlePageChange = (page) => setPage(page);

  return (
      <Router>
        <div className="fullVP">
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
          <Image currentPage={currentPage} />
        </div>
        <Route exact path='/aboutus'>
          <AboutUs />
        </Route>
        <Route exact path='/developments'>
          <Develop />
        </Route>
        <Route exact path='/properties'>
          <Property />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Footer />
      </Router>
  );
}

export default App;
