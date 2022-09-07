import React from 'react';
import './style.css';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';

export default function Header() {
    return(
        <header className="container-header">
            <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="oticas-vida-logo" tooltip="Logo da Óticas Vida" />

            <nav className="menu-secoes">
                <a href="#secao-produtos">PRODUTOS</a>
                <a href="#secao-resumo-quem-somos">SOBRE</a>
                <a href="#secao-fale-conosco">CONTATO</a>
                <a href="#"><ion-icon name="cart-outline"></ion-icon></a>
            </nav>
        </header>
    );
}