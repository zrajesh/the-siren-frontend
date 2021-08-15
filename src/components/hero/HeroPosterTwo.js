import React from 'react';

const HeroPosterTwo = ({posterUrl}) => {
    return (
        <div className="poster-wrap">
            {
                posterUrl.map((url) => (
                    <div
                      style={{backgroundImage: 
                        `url(${url.imageUrl})`, 
                        backgroundRepeat: "no-repeat",
                        WebkitBackgroundSize: "cover"
                        }}
                       className="mini-poster"
                       key={url.id}
                    >
                        <div className="hero-text-two">
                            <p className="main-text-mini">The sound cloud<br /> You loved is doomed</p>
                            <p className="category-date-mini">Travel / August 21 2017</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default HeroPosterTwo;
