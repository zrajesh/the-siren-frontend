//  Imports
import React from 'react';
import { useSelector } from 'react-redux';
// Import css
import "./HeroCarousel.scss";

const HeroCarousel = () => {
    const posterBigUrl = useSelector(state => state.hero.posterBig);
    const posterSmall1Url = useSelector(state => state.hero.posterTwo);
        return (
            <div id="slider">
                <figure>
                    <img src={posterBigUrl} alt="carousel" />
                    <img src={posterSmall1Url[0].imageUrl} alt="carousel" />
                    <img src={posterSmall1Url[1].imageUrl} alt="carousel" />
                    <img src={posterSmall1Url[0].imageUrl} alt="carousel" />
                    <img src={posterBigUrl} alt="carousel" />
                </figure>
            </div>
        );
    };

export default HeroCarousel;
