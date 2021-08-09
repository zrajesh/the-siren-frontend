import React, { useState } from 'react';

const HeroPosterTwo = () => {
    const [image, setImage] = useState({
        image1: "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1vdW50YWluJTIwd2F0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        image2: "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1vdW50YWluJTIwd2F0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    })
    return (
        <div className="poster-wrap">
            {
                Object.keys(image).map((keyValue, index) => (
                    <div
                      style={{backgroundImage: 
                        `url(${image[keyValue]})`, 
                        backgroundRepeat: "no-repeat",
                        WebkitBackgroundSize: "cover"
                        }}
                       className="mini-poster"
                       key={index}
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
