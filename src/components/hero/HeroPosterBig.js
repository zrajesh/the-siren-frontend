import React from 'react';

const HeroPosterBig = ({posterUrl}) => {
    return (
        <div 
             style={{backgroundImage: 
                `url(${posterUrl})`, 
                backgroundRepeat: "no-repeat",
                WebkitBackgroundSize: "cover"
            }}
             className="poster-big"
             >
                <div className="hero-text-big">
                    <p className="main-text">Title of vertical galley</p>
                    <p className="category-date">Travel / August 21 2017</p>
                </div>
            </div>
    );
};

export default HeroPosterBig;
