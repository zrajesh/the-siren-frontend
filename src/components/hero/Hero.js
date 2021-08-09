import React from 'react';
// Import components
import HeroPosterBig from './HeroPosterBig';
import HeroPosterTwo from './HeroPosterTwo';
// Import css
import "./Hero.scss";

const Hero = () => {
    return (
        <div className="hero-wrap">
            <HeroPosterBig />
            <HeroPosterTwo />
        </div>
    );
};

export default Hero;
