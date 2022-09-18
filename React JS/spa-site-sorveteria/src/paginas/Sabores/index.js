// Bibliotecas
import React from 'react';

// Arquivos
import './style.css';

// Componentes
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

const Sabores = () => (
    <div className="Sabores">
        <Header />

        <main>

            <section className="secao-banner-nossos-sabores">
                <h1>NOSSOS SABORES</h1>
            </section>

            <section className="secao-pagina-sabores">

                <h1>SABORES DE SORVETE</h1>
                
                <div className="secao-cards-sabores">

                    {/* CARD */}
                    <div className="card-sabores card-hover">
                        <img src={`${process.env.PUBLIC_URL}/assets/sabor-oreo.png`} alt="sorvete-de-oreo" />

                        <h3 className="card-sabores-titulo">Sorvete de Oreo</h3>

                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor!</p>
                    </div>

                    {/* CARD */}
                    <div className="card-sabores card-hover">
                        <img src={`${process.env.PUBLIC_URL}/assets/sabor-pistache.png`} alt="sorvete-pistache" />

                        <h3>Sorvete Pistache</h3>

                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>

                    {/* CARD */}
                    <div className="card-sabores card-hover">
                        <img src={`${process.env.PUBLIC_URL}/assets/sabor-cookies-avela.png`} alt="sorvete-de-cookies-e-avelã" />

                        <h3>Sorvete Cookies & Avelã</h3>

                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>

                    {/* CARD */}
                    <div className="card-sabores card-hover">
                        <img src={`${process.env.PUBLIC_URL}/assets/sorbet-kiwi.png`} alt="sorvete-de-kiwi" />

                        <h3>Sorvete de Kiwi</h3>

                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>

                    {/* CARD */}
                    <div className="card-sabores card-hover">
                        <img src={`${process.env.PUBLIC_URL}/assets/sorbet-morango.png`} alt="sorvete-de-morango" />

                        <h3>Sorvete de Morango</h3>

                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>

                    {/* CARD */}
                    <div className="card-sabores card-hover">
                        <img src={`${process.env.PUBLIC_URL}/assets/sorbet-limao.png`} alt="sorvete-de-limão-siciliano" />

                        <h3>Sorvete de Limão Siciliano</h3>

                        <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>

                </div>

            </section>

        </main>

        <Footer />
    </div>
);

export default Sabores;