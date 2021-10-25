import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Header />
        <Footer />
      </Router>
  );
}

export default App;
