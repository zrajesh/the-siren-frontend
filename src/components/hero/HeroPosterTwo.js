import React from 'react';
import { withRouter } from 'react-router';

const HeroPosterTwo = ({posterUrl, history}) => {
    return (
        <div
         className="poster-wrap">
            {
                posterUrl.map((url) => (
                    <div
                     onClick={() => {
                        history.push(`${url.category}`)
                      }}
                      style={{backgroundImage: 
                        `url(${url.imageUrl})`, 
                        backgroundRepeat: "no-repeat",
                        WebkitBackgroundSize: "cover"
                        }}
                       className="mini-poster"
                       key={url.id}
                    >
                        <div className="hero-text-two">
                            <p className="main-text-mini">{url.title}</p>
                            <p className="category-date-mini">{url.category}{url.date}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default withRouter(HeroPosterTwo);
