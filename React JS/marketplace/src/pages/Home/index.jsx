// Imports
import './style.css';
import { Link } from 'react-router-dom';

// Page -> Home
export const Home = () => {
    return (
        <main>
            <section className='secao-principal'>
                <div className='div-secao-principal limita-secao'>
                    <h1>Pagina Home</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sapiente corrupti impedit tempore distinctio libero tempora rerum doloremque necessitatibus ratione soluta, dolor nam similique amet eaque quaerat quasi quam qui.</p>

                    <div className='div-Links'>
                        <Link to='/sobre' className='link-sobre'>Ir para a pagina Sobre</Link>
                        <Link to='/sobre' className='link-sobre'>Ir para a pagina Sobre</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};