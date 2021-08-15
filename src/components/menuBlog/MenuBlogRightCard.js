import React from 'react';

const MenuBlogRightCard = ({pageData}) => {
    return (
        <div className="blog-card-right">
            {
                pageData.item === 1 ?
                <div>
                    <h2>Top Posts</h2>
                    <hr className="bollywood-top-hr" /> 
                </div> : null
            }
            <div className={"blog-card-item-right " + (pageData.item !== 1 ? "blog-card-item-flex-right": "")}>
                <div className="blog-card-item-right-image">
                    {
                        pageData.item === 1 ?
                        <img
                         src={pageData.imageUrl}
                         alt="blogImage"
                         style={{height: "250px", width: "350px"}}
                        /> :
                        <img
                         src={pageData.imageUrl}
                         alt="blogImage"
                         style={{height: "120px", width: "120px"}}
                        />
                    }
                </div>
                    <div className="blog-card-item-text-right">
                        <div>
                        <p
                         className="blog-card-title-right"
                        >{pageData.title}</p>
                    
                        <p className="blog-card-category-right">{pageData.category} <span className="blog-card-span">{pageData.date}</span></p>
                        </div>
                        <div>
                            <p className="blog-number">{pageData.item}</p>
                        </div>
                    </div>
            </div>
                {
                    pageData.item !== 4 ? <hr className="blog-card-hr-right" /> : null
                }
                {
                    pageData.item ===4 ? 
                    <div className="blog-card-advertisement-right">
                        <p>Advertisement</p>
                    </div> : null
                }
        </div> 
    );
};

export default MenuBlogRightCard;
