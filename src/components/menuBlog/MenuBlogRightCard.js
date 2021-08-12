import React from 'react';

const MenuBlogRightCard = ({item}) => {
    return (
        <div className="blog-card-right">
            {
                item === 1 ?
                <div>
                    <h2>Top Posts</h2>
                    <hr className="bollywood-top-hr" /> 
                </div> : null
            }
            <div className="blog-card-item-right">
                <div className="blog-card-item-right-image">
                    {
                        item === 1 ?
                        <img
                         src="https://images.pexels.com/photos/942573/pexels-photo-942573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                         alt="blogImage"
                         style={{height: "250px", width: "350px"}}
                        /> :
                        <img
                         src="https://images.pexels.com/photos/942573/pexels-photo-942573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                         alt="blogImage"
                         style={{height: "120px", width: "120px"}}
                        />
                    }
                </div>
                    <div className="blog-card-item-text-right">
                        <div>
                        <p
                         className="blog-card-title-right"
                        >Catch Waves with an adventure guide</p>
                    
                        <p className="blog-card-category-right">Travel <span className="blog-card-span">/ August 21 2017</span></p>
                        </div>
                        <div>
                            <p className="blog-number">{item}</p>
                        </div>
                    </div>
                </div>
                {
                    item !== 5 ? <hr className="blog-card-hr-right" /> : null
                }
                {
                    item ===5 ? 
                    <div className="blog-card-advertisement-right">
                        <p>Advertisement</p>
                    </div> : null
                }
            </div> 
    );
};

export default MenuBlogRightCard;
