// Bibliotecas
import React from 'react';

// Arquivos
import './style.css';

const Footer = () => (
    <footer>

        <div className='limitar-secao container-footer'>

            <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt='logo'/>

            <div className='footer-box'>
                <h3>ENDEREÇO</h3>
                <p>Av. Bernadino de Campos, 98</p>
                <p>São Paulo, SP 12345-678</p>
            </div>

            <div className='footer-box'>
                <h3>CONTATO</h3>
                <p>info@meusite.com</p>
                <p>Tel: (11) 3456-7890</p>
            </div>

            <div className='footer-box'>
                <h3>HORÁRIOS</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 22:00</p>
            </div>

        </div>

        <div className='footer-creditos-dev'>
            <p>Gelateria. Orgulhosamente desenvolvido por Iuri Torres</p>
        </div>

    </footer>
);

export default Footer;