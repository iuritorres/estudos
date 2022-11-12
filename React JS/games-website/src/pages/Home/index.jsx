// Imports
import { Header } from "../../components/Header";
import './style.css';

// Home
export const Home = () => {
    return (

        <div className="home-page">
            <Header />

            <main>

                {/* Secao Banner */}
                <section className="secao-banner">

                    <div className="limita-secao div-main-secao-banner">

                        <div className="title-secao-banner">
                            <h2>
                                <span>farcry6</span>
                                DISPONÍVEL
                            </h2>
                            <hr />
                            <h3>AGORA</h3>
                        </div>

                        <a href="https://youtu.be/83crByRN6d0" target={'__blank'}>
                            <button onClick={'href="https://youtu.be/83crByRN6d0"'}>
                                <div>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAOVBMVEVHcEzq4c/q4c/q4c/q4c/q4c/q4c/q4c/q4c/q4c/q4c/q4c/q4c/q4c/q4c/q4c/q4c/q4c/q4c9HFmYiAAAAEnRSTlMAqCU2/NtiCYnyUOhEy5oWd7PjpmRyAAADSElEQVRo3rWayZKjMBBEJdDKar///9g+CGxDgzZAp5kIOl1kVqk2hMg4tjVOjrr34Hs9SmdaK+44dnCj4ueE/6jRDRd/wHbSc3q87OrxG9eTOL1rqqBb+WVDv50ZmtkKOzftYNxbf1mSbbnV8mOcNAfWNUb2H/gy661brPbTcP7UMC2CKFfAfbe8tTaJP7JmfXLINnuFzjJkDE/nGd+Ep3uT+54mkD9mMN/5YhYXhXyXNEMB6EL3ajWASrxsoFsWB54NnuuS2OpVE3MvlUB3edTFxDpFNwC+rb2KWg9wwnunLmEv6OrwxRt/EXtB9wf+bvXpzxbwrgD939cmgJe4eF6Amv7dcADyelaUAMMBKfqGrHsE5ADVihtOq/be3qhU7OYfB6hmx1R/TykibL9Vr42EVvkxW4olMIrbzvhreqOAs/B5lxcm3S/rDtBnT6KmuRRdf93D9jHGAf+y5awv/tEB3kbAS7J1MNd/eJbAJKLgMA4l6NMqqfVAmwKHEmXblYwB6EUaHAqU7Zfry0VZEZuCPFvZafGXMeLkO/B8ZbsQllYBcy54rrIzoKxoYxF0AJ6prAZaYYB3EXhWzL4BIxwoVwaeo6wDnJCJ2/as0zLpG0CK8X9CzQFPKTsAo9BAUwMeV7YBtOjjnhgDjyk7A73wgK0EjyhrAS8ARDX4ubIAgkuWnysLIPwFziPggZa+3ltitARB9SXwU0GDK1YHUdwVQxBVhn8qiEL4u0QJWhn+AdYkiv7KiysQUp4ssq7ckCxK01xesljSXFmCzk1zS4IuKS3yE/RaWuQXRQWlxVoUWR8No6qiaPjUtjLqjGVJf1+I5pTQhYXoTwmdLP6LS+if4j/RtlQU/z9tS2i4zH1ty6bhiraKFQ2X3nhIrMktbxUN21ZFAn1xR3hyreza88D6dA/4tB8sPDoSeXaY8+gY6s4B2oF4t43+1BG7Tw4tnx23PjsofnbE/exw/tm1wrMLkZU6HlnlfJdQ2bp2+Uuo7/psfGB9JoQYnlv8ic3KMiJtW7WyFJtl69QdJMC5mz47ZFk+kd2sieWyJhZ2bgbj5LU1sRC7Bbfi6N+1C24hHl3NB/z9RwXc9VHB+gPhcwjvwfuCzyH+AC7Me5M8NlXkAAAAAElFTkSuQmCC" alt="trailer-farcry6" />
                                </div>
                                <a href="https://youtu.be/83crByRN6d0" target={'__blank'}>ASSISTA AO TRAILER</a>
                                
                            </button>
                        </a>
                    </div>

                </section>

                {/* Secao Slider */}

                <section className="secao-slider">

                    <div className="limita-secao div-secao-slider">

                        <div className="slider-secao-slider">

                            <div className="div-main-secao-slider">

                                <div className="div-slider-new">
                                    <span>NOVO</span>
                                </div>

                                <h2>
                                    Marvel's Spider Man:<br/>
                                    Myles Morales
                                </h2>

                                <div className="div-new-buttons">
                                    <a href="#">Trailer</a>
                                    <a href="#">Comprar</a>
                                </div>

                            </div>

                            <div className="div-main-secao-slider">
                                <img src="assets/miranha.png" alt="miranhaa" />
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
};