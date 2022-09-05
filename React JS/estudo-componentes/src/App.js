import React from 'react';
import './App.css';

import Header from './elementos/Header/';
import Footer from './elementos/Footer/';
import HomePage from './elementos/HomePage/';

function App() {
  return(
    <div className="App">
      <Header />

      <HomePage />
      
      <Footer />
    </div>
  );
}

export default App;