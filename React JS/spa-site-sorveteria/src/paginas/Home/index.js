// Bibliotecas
import React from 'react';

// Arquivos
import './style.css';

// Componentes
import Header from '../../componentes/Header/';
import Footer from '../../componentes/Footer';

const Home = () => (
    <div className='Home'>

        <Header />

        <main>

            {/* Seção Banner */}
            <section className='secao-banner'>

                <div className='limitar-secao container-secao-banner'>
                    <h1>SORVETE ARTESANAL</h1>
                </div>

            </section>

            {/* Seção Sabores */}
            <section className='secao-sabores'>

                <img src={`${process.env.PUBLIC_URL}/assets/banner-sabores.jpg`} alt='sabores-sorvete' />

                <div>
                    <h2>NOSSOS SABORES</h2>
                    <span>Novos e deliciosos!</span>

                    <p>
                        Sorvete bom é aquele feito com os melhores ingredientes!
                        Aqui na gelateria todos os nossos produtos são naturais,
                        à base de frutas e sem nenhum conservante! Também temos
                        opções sem lactose e sem açucar. Venha conhecer e perceber
                        que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                    </p>
                </div>

            </section>

            {/* Seção Eventos */}
            <section className='secao-eventos'>

                <div>
                    <h2>NOSSOS EVENTOS</h2>
                    <span>Delícias com sorvete!</span>

                    <p>
                        Mais do que uma sorveteria, uma extensão da sua casa!
                        Estamos aqui prontinhos para te atender e oferecer os
                        melhores eventos com os melhores sorvetes da sua vida!
                        Venha nos conhecer e passar um tempo aqui com a gente!
                    </p>
                </div>

                <img src={`${process.env.PUBLIC_URL}/assets/eventos-image.jpg`} alt='eventos-sorveteria' />

            </section>

            {/* Seção Sobre */}
            <section className='secao-sobre'>

                <img src={`${process.env.PUBLIC_URL}/assets/sobre-image.jpg`} alt='sabores-sorvete' />

                <div>
                    <h2>SOBRE NÓS</h2>
                    <span>Alegria em cada casquinha!</span>

                    <p>
                        Venha tomar o melhor sorvete da região aqui com a gente!
                        Nós estamos há anos no mercado produzindo o que tem de
                        melhor para o nosso cliente e você não pode ficar fora dessa.
                        Venha nos fazer uma visita e aproveite o melhor atendimento
                        e o melhor sorvete da cidade.
                    </p>
                </div>

            </section>

        </main>

        <Footer />

    </div>
);

export default Home;