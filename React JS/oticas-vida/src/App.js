import React from 'react';
import './App.css';

import Header from './elementos/Header/';
import SecaoBanner from './elementos/SecaoBanner/';
import Produtos from './elementos/Produtos/';
import { QuemSomosResumo } from './elementos/QuemSomos/';
import { FaleConosco } from './elementos/Contato/';
import Footer from './elementos/Footer/';

function App() {
  return(
    <div className="App">
      <Header />
      <SecaoBanner />
      <Produtos />
      <QuemSomosResumo />
      <FaleConosco />
      <Footer />
    </div>
  );
}

export default App;