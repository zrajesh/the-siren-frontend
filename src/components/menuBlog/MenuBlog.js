import React from 'react';

// Import css
import "./MenuBlog.scss";
import MenuBlogLeftCard from './MenuBlogLeftCard';
import MenuBlogRightCard from './MenuBlogRightCard';

const MenuBlog = ({item, pageName}) => {
    return (
        <div className="blog-menu">
            <MenuBlogLeftCard item={item} pageName={pageName} />
            <MenuBlogRightCard item={item} />
        </div>
    );
};

export default MenuBlog;
