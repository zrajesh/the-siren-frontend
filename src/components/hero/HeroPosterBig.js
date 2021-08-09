import React from 'react';

const HeroPosterBig = () => {
    return (
        <div 
             style={{backgroundImage: 
                `url(https://images.unsplash.com/photo-1520057364200-6d620317dc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80)`, 
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
