import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
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
// Api call imports
import { apiCallAction } from '../../redux/actions/apiCallAction';
import { techApiCallAction } from '../../redux/actions/techApiCallAction';
import { hollywoodApiCallAction } from '../../redux/actions/hollywoodApiCallAction';
import { fitnessApiCallAction } from '../../redux/actions/fitnessApiCallAction';
import { foodApiCallAction } from '../../redux/actions/foodApiCallAction';

const Hero = () => {
    const dispatch = useDispatch();
    const posterBigUrl = useSelector(state => state.hero.posterBig);
    const posterSmall1Url = useSelector(state => state.hero.posterTwo);

    useEffect(() => {
        // Bollywood api call
        axios.get("https://thesirenbackend.herokuapp.com/api/bollywood")
            .then(resp => {
                dispatch(apiCallAction(resp.data));
            })
            .catch(err => console.log(err))
        // Technology api call
        axios.get("https://thesirenbackend.herokuapp.com/api/technology")
            .then(resp => {
                dispatch(techApiCallAction(resp.data));
            })
            .catch(err => console.log(err))
        // Hollywood api call
        axios.get("https://thesirenbackend.herokuapp.com/api/hollywood")
            .then(resp => {
                dispatch(hollywoodApiCallAction(resp.data));
            })
            .catch(err => console.log(err))
        // Fitness api call
        axios.get("https://thesirenbackend.herokuapp.com/api/fitness")
            .then(resp => {
                dispatch(fitnessApiCallAction(resp.data));
            })
            .catch(err => console.log(err))
        // Food api call
        axios.get("https://thesirenbackend.herokuapp.com/api/food")
            .then(resp => {
                dispatch(foodApiCallAction(resp.data));
            })
            .catch(err => console.log(err))
    },[])
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
