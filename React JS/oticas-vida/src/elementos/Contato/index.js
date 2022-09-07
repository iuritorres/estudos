import React from 'react';
import './style.css';

export function FaleConosco() {
    return(
        <section id="secao-fale-conosco" className="secao-fale-conosco">

            <div className="conteudo-fale-conosco">
                <div className="titulo-descricao-fale-conosco">
                    <h1>FALE CONOSCO</h1>

                    <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                </div>

                <div className="div-contato-redes">
                    <div className="div-contato">
                        <h2>Contato</h2>

                        <ul>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/assets/local.png`} alt="Endereço" tooltip="Endereço" />
                                <p>Nova Iguaçu, RJ</p>
                            </li>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/assets/telefone.png`} alt="Telefone" tooltip="Telefone" />
                                <p>(21) 9999-9999</p>
                            </li>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/assets/email.png`} alt="E-mail" tooltip="E-mail" />
                                <p>contato@oticavida.com</p>
                            </li>
                        </ul>
                    </div>

                    <div className="div-redes">
                        <h2>Nossas Redes Sociais</h2>

                        <ul>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/assets/fb.png`} alt="Facebook" tooltip="Facebook" />
                                <p>/OticaVida</p>
                            </li>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/assets/ig.png`} alt="Instagram" tooltip="Instagram" />
                                <p>@oticavidarj</p>
                            </li>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/assets/tt.png`} alt="Twitter" tooltip="Twitter" />
                                <p>@oticavidarj</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
}