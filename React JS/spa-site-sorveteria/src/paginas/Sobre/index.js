// Bibliotecas
import React from 'react';

// Arquivos
import './style.css';

// Componentes
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

const Sobre = () => (
    <div className="Sobre">
        <Header />

        <main className="conteudo-pagina-sobre">

        <section className="secao-banner-pagina-sobre">
            <h1>A GELATERIA</h1>
        </section>

        <section className="limitar-secao secao-sobre-conteudo">
            <h2>Sobre Nós</h2>
            <span>Nós simplesmente amamos sorvetes</span>

                <p>
                    Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido.
                    Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios.
                    Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete.
                    Vendemos tanto para varejo como para atacado.
                </p>

                <p>
                    Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua
                    residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos
                    eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos
                    serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores
                    produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                </p>
        </section>

        <section className="secao-imagens-pagina-sobre">
            <img className="secao-imagens-pagina-sobre-img1" src={`${process.env.PUBLIC_URL}/assets/sobre-image.jpg`} alt="gelateria-sobre-nos" />
            <img className="secao-imagens-pagina-sobre-img2" src={`${process.env.PUBLIC_URL}/assets/sorveteria.jpg`} alt="gelateria-sobre-nos" />
        </section>

        </main>

        <Footer />
    </div>
);

export default Sobre;