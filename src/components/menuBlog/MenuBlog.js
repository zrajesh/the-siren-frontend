import React from 'react';

// Import css
import "./MenuBlog.scss";
import MenuBlogLeftCard from './MenuBlogLeftCard';
import MenuBlogRightCard from './MenuBlogRightCard';

const MenuBlog = ({pageLeftData, pageRightData, pageName}) => {
    return (
        <div className="blog-menu">
            <div>
            {
                pageLeftData.map(pageData => (
                    <MenuBlogLeftCard
                     key={pageData.item}
                     pageData={pageData} 
                     pageName={pageName} 
                    />
                ))
            }
            </div>
            <div>
            {
                pageRightData.map(pageData => (
                    <MenuBlogRightCard
                     key={pageData.item}
                     pageData={pageData} 
                    />
                ))
            }
            </div>
        </div>
    );
};

export default MenuBlog;
