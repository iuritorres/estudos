// Imports
import './style.css';

// Header
export const Header = () => {
    return (
        <header>

            <div className='limita-secao container-header'>
                
                {/* Itens Esquerda */}
                <div className='div-principal-header'>

                    <div className='div-logo'>
                        <img src='\assets\gamepad-logo.png' alt='logo'/>
                        <h1>UNIONSTORE</h1>
                    </div>

                    <div className='subdiv-header'>
                        <div className="subdiv-header-title">
                            <a>LOJA</a>
                            <ion-icon name="caret-down"></ion-icon>
                        </div>
                        <span>games</span>
                    </div>

                    <div className='subdiv-header'>
                        <div className="subdiv-header-title">
                            <a>BLOG</a>
                            <ion-icon name="caret-down"></ion-icon>
                        </div>
                        <span>notícias</span>
                    </div>

                    <div className='subdiv-header'>
                        <div className="subdiv-header-title">
                            <a>TORNEIOS</a>
                            <ion-icon name="caret-down"></ion-icon>
                        </div>
                        <span>competitivo</span>
                    </div>

                </div>

                {/* Itens Direita */}
                <div className='div-principal-header2'>

                    <div className='subdiv-header'>
                        <div className="subdiv-header-title user-header-div">
                            <a>JAACK</a>
                            <ion-icon name="caret-down"></ion-icon>
                        </div>
                        <span>usuário</span>
                    </div>

                    <div className="header-icons">
                        <ion-icon name="search"></ion-icon>
                        <ion-icon name="cart"></ion-icon>

                        <div className='header-user-icon'>
                            <ion-icon name="person"></ion-icon>
                            <ion-icon name="caret-down"></ion-icon>
                        </div>
                    </div>

                </div>
            </div>

        </header>
    );
};