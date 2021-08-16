import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Import components
import { blogContentAction } from '../../redux/reducer/blogContentAction';

const MenuBlogLeftCard = ({pageData, pageName, history}) => {
    const dispatch = useDispatch();
    return (
        <div
         onClick={
            () => {
                dispatch(blogContentAction(pageData));
                history.push(`${history.location.pathname}/${pageData.title}`);
            }
            }
         className="blog-card-left">
            {
                pageData.item === 1 ?
                <div>
                    <h2>{pageName}</h2>
                    <hr className="bollywood-name-hr" /> 
                </div> : null
            }
                <div className="blog-card-item-left">
                    <div className="blog-card-image-div-left">
                        <img 
                         src={pageData.imageUrl} 
                         alt="blogImage" 
                         className="blog-card-image"
                         />
                    </div>
                    <div className="blog-card-text-left">
                    <p
                     className="blog-card-title"
                    >{pageData.title}</p>
                    <p
                     className="blog-card-para"
                    >{pageData.shortPara}
                    </p>
                    <p className="blog-card-category">{pageData.category} <span className="blog-card-span">{pageData.date}</span></p>
                    </div>
                </div>
                {
                    pageData.item !== 7 ? <hr className="blog-card-hr" /> : null
                }
                {
                    pageData.item === 7 ? 
                    <p
                     style={{
                         marginTop: "35px", 
                         cursor: "pointer",
                         color: "#868686",
                         width: "120px"
                        }}
                    ><i
                     className="fas fa-long-arrow-alt-down"
                     style={{
                         marginRight: "10px", 
                         color: "#d44c4c", 
                         fontSize: "20px"
                        }}
                    ></i>LOAD MORE</p> : null
                }
            </div>
    );
};

export default withRouter(MenuBlogLeftCard);
