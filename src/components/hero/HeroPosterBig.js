import React from 'react';
import { withRouter } from 'react-router';

const HeroPosterBig = ({posterUrl, history}) => {
    return (
        <div
             onClick={() => history.push("/hollywood")}
             style={{backgroundImage: 
                `url(${posterUrl})`, 
                backgroundRepeat: "no-repeat",
                WebkitBackgroundSize: "cover"
            }}
             className="poster-big"
             >
                <div className="hero-text-big">
                    <p className="main-text">All your favourite movie blogs in one place</p>
                    <p className="category-date">Hollywood / August 21 2021</p>
                </div>
            </div>
    );
};

export default withRouter(HeroPosterBig);
