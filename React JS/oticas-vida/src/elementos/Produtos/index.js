import React from 'react';
import './style.css';

export default function Produtos() {
    return (
        <section id="secao-produtos" className="secao-produtos">
            <div className="conteudo-secao-produtos">
                <div className="titulo-descricao-produtos">
                    <h1>NOSSOS PRODUTOS</h1>

                    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                    <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                </div>

                <div className="container-produtos">
                    <div className="produto">
                        <h2>Óculos de Grau</h2>

                        <img src={`${process.env.PUBLIC_URL}/assets/oculos01.png`} alt="oculos-de-grau" tooltip="Óculos de Grau" />
                        <p>R$ 500,00</p>
                    </div>

                    <div className="produto">
                        <h2>Óculos transition</h2>

                        <img src={`${process.env.PUBLIC_URL}/assets/oculos02.png`} alt="oculos-de-grau" tooltip="Óculos de Grau" />
                        <p>R$ 750,00</p>
                    </div>

                    <div className="produto">
                        <h2>Óculos de sol</h2>

                        <img src={`${process.env.PUBLIC_URL}/assets/oculos03.png`} alt="oculos-de-grau" tooltip="Óculos de Grau" />
                        <p>R$ 700,00</p>
                    </div>

                    <div className="produto">
                        <h2>Óculos infantil</h2>

                        <img src={`${process.env.PUBLIC_URL}/assets/oculos04.png`} alt="oculos-de-grau" tooltip="Óculos de Grau" />
                        <p>R$ 500,00</p>
                    </div>
                </div>
                
                <div className="detalhes-produtos">
                    <p>Todos os nossos produtos incluem:</p>

                    <ul type="none">
                        <li>• Garantia de 1 ano</li>
                        <li>• Manutenção preventiva</li>
                        <li>• Descontos especiais na compra da segunda unidade</li>
                        <li>• Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}