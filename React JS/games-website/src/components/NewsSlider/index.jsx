// Imports
import { useState } from 'react';
import './style.css';

// Home
export const NewsSlider = () => {

    // Slides
    const newsSlides = [
        {
            title: <h2>Marvel's Spider Man:<br />Myles Morales</h2>,
            image: "miranha.png",
            width: "500px"
        },
        {
            title: <h2>The Legend of Zelda: <br />Breath of the Wild</h2>,
            image: "zelda_and_link.png",
            width: "380px"
        },
        {
            title: <h2>Sony's God of War:<br />Ragnarok</h2>,
            image: "gow-ragnarok.webp",
            width: "450px"
        }
    ];

    const [slideTitle, setSlideTitle] = useState(newsSlides[0]['title']);
    const [slideImg, setSlideImg] = useState('assets/' + newsSlides[0]['image']);
    const [slideImgWidth, setSlideImgWidth] = useState(newsSlides[0]['width']);
    const [index, setIndex] = useState(0);

    // Change slide content
    const changeContent = (pos) => {
        // Conditionals
        if (pos === 'left' && index === 0) {
            setIndex(newsSlides.length - 1);
        }
        else if ( pos === 'left' ) {
            setIndex(index - 1);

            if (index < 0) {
                setIndex(index * (-1));
            };
        }
        else if ( pos === 'right' ) {
            setIndex(index + 1);

            if (index >= newsSlides.length - 1) {
                setIndex(0);
            };
        }
        
        // Setters
        setSlideTitle(newsSlides[index]['title']);
        setSlideImg('assets/' + newsSlides[index]['image']);
        setSlideImgWidth(newsSlides[index]['width']);

        // position log
        console.log(index);
    };

    // Component return
    return (
        <section id='secao-slider' className="secao-slider">

            <button className='seta-esquerda' onClick={() => { changeContent('left') } }>
                <img src="/assets/chevron-back-outline.svg" alt="recuar-slider" />
            </button>

            <div className="div-secao-slider">

                <div className="slider-secao-slider">

                    <div className="div-main-secao-slider">
                        <div className="div-slider-new">
                            <span>NOVO</span>
                        </div>

                        {slideTitle}

                        <div className="div-new-buttons">
                            <a href="#">Trailer</a>
                            <a href="#">Comprar</a>
                        </div>
                    </div>

                    <div className="div-main-secao-slider">
                        <img id='slider-image' style={{ width: slideImgWidth }} src={slideImg} alt="miranhaa" />
                    </div>

                </div>

            </div>

            <button className='seta-direita' onClick={() => { changeContent('right') }}>
                <img src="/assets/chevron-forward-outline.svg" alt="avancar-slider" />
            </button>

        </section>
    );
};