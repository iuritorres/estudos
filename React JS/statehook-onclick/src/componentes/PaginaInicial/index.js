import React, { useState } from 'react';
import './estilo.css';

export default function PaginaInicial() {

  const [ numeroAleatorio, setNumeroAleatorio ] = useState(0);

  function gerarNumero() {
    const novoNumero  = Math.floor(Math.random() * (100-1) + 1);
    setNumeroAleatorio(novoNumero);
  }

  const [ novoTexto, setNovoTexto ] = useState();

  function alterarTexto() {
    setNovoTexto('Hello World!');
  }

  return(
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

