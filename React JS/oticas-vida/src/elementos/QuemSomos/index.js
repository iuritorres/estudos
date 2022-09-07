import React from 'react';
import './style.css'

export function QuemSomosResumo() {
    return(
        <section id="secao-resumo-quem-somos" className="secao-resumo-quem-somos">
            <div className="conteudo-quem-somos">
                <div className="titulo-descricao-quem-somos">
                    <h1>QUEM SOMOS NÓS?</h1>

                    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                </div>

                <div className="beneficios-quem-somos">

                    <div className="box box1-quem-somos">
                        <img src={`${process.env.PUBLIC_URL}/assets/loja.png`} alt="atendimento-flexivel" tooltip="Atendimento Flexível"/>
                        <div className="div-beneficios-quem-somos">
                            <h1>NOSSAS<br/>FILIAIS</h1>
                            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                        </div>
                    </div>

                    <div className="box box2-quem-somos">
                        <div className="div-beneficios-quem-somos">
                            <h1>ATEMDIMENTO<br/>FLEXÍVEL</h1>
                            <p>Nossa equipe é treinada para te atender</p>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/assets/atendimento.png`} alt="nossas-filiais" tooltip="Nossas Filiais" />
                    </div>

                </div>
            </div>
        </section>
    );
}