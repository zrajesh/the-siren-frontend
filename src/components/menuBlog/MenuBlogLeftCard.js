import React from 'react';

const MenuBlogLeftCard = ({item, pageName}) => {
    return (
        <div className="blog-card-left">
            {
                item === 1 ?
                <div>
                    <h2>{pageName}</h2>
                    <hr className="bollywood-name-hr" /> 
                </div> : null
            }
                <div className="blog-card-item-left">
                    <div className="blog-card-image-div">
                        <img 
                         src="https://images.pexels.com/photos/942573/pexels-photo-942573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                         alt="blogImage" 
                         className="blog-card-image"
                         />
                    </div>
                    <div className="blog-card-text-left">
                    <p
                     className="blog-card-title"
                    >Catch Waves with an adventure guide</p>
                    <p
                     className="blog-card-para"
                    >Gujurat is vastly underrated and is mistery to us why region isn't more well-
                    </p>
                    <p className="blog-card-category">Travel <span className="blog-card-span">/ August 21 2017</span></p>
                    </div>
                </div>
                {
                    item !== 5 ? <hr className="blog-card-hr" /> : null
                }
                {
                    item === 5 ? 
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

export default MenuBlogLeftCard;
