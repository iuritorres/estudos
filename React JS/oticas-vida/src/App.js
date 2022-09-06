import React from 'react';
import './App.css';

import Header from './elementos/Header/';
import SecaoBanner from './elementos/SecaoBanner/';
import Produtos from './elementos/Produtos/';

function App() {
  return(
    <div className="App">
      <Header />
      <SecaoBanner />
      <Produtos />
    </div>
  );
}

export default App;