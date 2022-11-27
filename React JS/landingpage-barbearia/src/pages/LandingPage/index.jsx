import './style.css';
import { useState } from 'react';

export const LangingPage = () => {
    // Scripts
    const temaClaro = "tema-claro";
    const temaEscuro = "tema-escuro";

    const [ estiloAtualizado, setEstiloAtualizado ] = useState(true);

    const alterarTema = () => {
        setEstiloAtualizado(!estiloAtualizado);
    };

    // Return
    return (
        <>
        {/* Header */}
        <header className={estiloAtualizado ? temaClaro : temaEscuro}>
            <div className="div-header limitar-secao">
                <img src="/src/assets/barbearia-logo.png" alt="barbershop-logo" tooltip="Nossa Logo" />
                <button className={estiloAtualizado ? temaClaro : temaEscuro} onClick={alterarTema}>
                        <img src={estiloAtualizado ? "src/assets/moon.png" : "src/assets/sun.png"} alt="mudar-tema" tooltip="Mudar Tema" />
                    <span>{estiloAtualizado ? "Dark" : "Light"}</span>
                </button>
            </div>
        </header>

        {/* Secao Banner */}
        <section className="secao-banner"></section>

        {/* Secao Bem-vindo */}
            <section className={estiloAtualizado ? `${temaClaro} secao-bemvindo` : `${temaEscuro} secao-bemvindo`}>
                <div className="div-bemvindo limitar-secao">
                    <h1>Bem-vindo a Barber Shop</h1>

                    <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                    <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                    
                    <p>S. Kelly</p>
            </div>
        </section>
        </>
    );
};