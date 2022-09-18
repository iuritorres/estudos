// Bibliotecas
import React from "react";
import { Link } from 'react-router-dom';

// Arquivos
import './style.css';

const Header = () => (
    <header>
        <div className="limitar-secao container-header">
            <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" />

            <nav>
                <Link className='header-botao-nav' to='/' >Home</Link>
                <Link className='header-botao-nav' to='/sabores' >Sabores</Link>
                <Link className='header-botao-nav' to='/sobre' >Sobre</Link>
            </nav>
        </div>
    </header>
);

export default Header;