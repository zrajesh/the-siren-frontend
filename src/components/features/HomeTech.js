import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
// Import components
import { blogContentAction } from '../../redux/reducer/blogContentAction';
import { suggestionAction } from '../../redux/reducer/suggesstionAction';
// Import css
import "./HomeTech.scss";

const HomeTech = ({history}) => {
    const pageData = useSelector(state => state.technologyLeft.pageLeftData);
    const dispatch = useDispatch();
    return (
        <div className="home-tech">
            <h2 className="home-tech-head">The Tech</h2>
            <hr className="home-tech-head-hr" />
            <div className="home-cards">
                {
                    pageData
                    .filter(data => data.item < 4)
                    .map((data, index) => (
                        <div
                         onClick={() => {
                            dispatch(suggestionAction(pageData))
                            dispatch(blogContentAction(data));
                            history.push(`${data.category}/${data.title}`);
                         }}
                         key={index} 
                         className="home-card"
                        >
                            <img
                             className="home-tech-image"
                             src={data.imageUrl}
                             alt="homeTech"
                            />
                            <div className="home-tech-text">
                                <h2>{data.title}</h2>
                                <p className="home-tech-para">{data.shortPara}</p>
                                <p>{data.category}<span className="home-tech-date"> {data.date}</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default withRouter(HomeTech);
