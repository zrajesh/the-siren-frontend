import React from 'react';
import { useSelector } from 'react-redux';
// Import components
import HeroPosterBig from './HeroPosterBig';
import HeroPosterTwo from './HeroPosterTwo';
// Import css
import "./Hero.scss";

const Hero = () => {
    const posterBigUrl = useSelector(state => state.hero.posterBig);
    const posterSmall1Url = useSelector(state => state.hero.posterTwo);
    return (
        <div className="hero-wrap">
            <HeroPosterBig posterUrl={posterBigUrl}  />
            <HeroPosterTwo posterUrl={posterSmall1Url} />
        </div>
    );
};

export default Hero;
