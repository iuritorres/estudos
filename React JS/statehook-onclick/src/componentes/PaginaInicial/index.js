import React, { useState } from 'react';
import './estilo.css';

export default function PaginaInicial() {

  // Mudar pro tema Dark
  const temaLight = 'tema Light';
  const temaDark = 'tema Dark';

  const [ tema, setTema ] = useState(temaLight);

  function mudarTema() {
    const novoTema = tema === temaLight ? temaDark : temaLight;
    setTema(novoTema);
  };


  // Gerar número aleatório
  const [ numeroAleatorio, setNumeroAleatorio ] = useState(0);

  function gerarNumero() {
    const novoNumero  = Math.floor(Math.random() * (100-1) + 1);
    setNumeroAleatorio(novoNumero);
  };


  // Gerar texto aleatório
  const [ novoTexto, setNovoTexto ] = useState();

  const arrayTextos = [ 'Hello World!', 'ihuaaaaaa', 'a gara gan', 'KKKKKKK', 'Reri we go aguein...' ];

  function alterarTexto() {
    const posicaoArray = Math.floor(Math.random() * (arrayTextos.length - 0) + 0);

    const textoAleatorio = arrayTextos[posicaoArray];
    setNovoTexto(textoAleatorio);
  };


  return(
    <div>

      <div className="head-box conteudo-centralizado">
        <h3>Estudo State Hook e onClick</h3>

        <button className="theme-button" onClick={ mudarTema }>{ tema }</button>
      </div>

      <div className="conteudo-centralizado">
          <h3>Número aleatório:</h3>
          <h1>{ numeroAleatorio }</h1>
          
          <div className='area-botao'>
            <label>
              Click no botão abaixo para gerar um número aleatório:
            </label>
            
            <button onClick={ gerarNumero } >
              Gerar número
            </button>
          </div>
          
        </div>

      <div className="conteudo-centralizado">

        <div className="area-texto">
          <h2>{ novoTexto }</h2>
        </div>

        <label>
          Click no botão abaixo para aparecer um texto:
        </label>

        <button onClick={ alterarTexto }>
          Gerar texto
        </button>
      </div>

    </div>
  );
}

