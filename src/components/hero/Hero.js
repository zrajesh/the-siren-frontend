import React from 'react';
import { useSelector } from 'react-redux';
// Import components
import HeroPosterBig from './HeroPosterBig';
import HeroPosterTwo from './HeroPosterTwo';
import HomeTech from '../features/HomeTech';
import LatesHollywood from '../features/LatesHollywood';
import FoodFeature from '../features/FoodFeature';
import LatestFitness from '../features/LatestFitness';
import HeroCarousel from './HeroCarousel';
// Import css
import "./Hero.scss";

const Hero = () => {
    const posterBigUrl = useSelector(state => state.hero.posterBig);
    const posterSmall1Url = useSelector(state => state.hero.posterTwo);

    return (
        <div>
        <div className="hero-wrap">
            <HeroPosterBig posterUrl={posterBigUrl}  />
            <HeroPosterTwo posterUrl={posterSmall1Url} />
        </div>
        <HeroCarousel />
        <HomeTech />
        <LatesHollywood />
        <FoodFeature />
        <LatestFitness />
        </div>
    );
};

export default Hero;
