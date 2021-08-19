import React from 'react';
import { useDispatch } from 'react-redux';
// Import components
import { suggestionAction } from '../../redux/reducer/suggesstionAction';
// Import css
import "./MenuBlog.scss";
import MenuBlogLeftCard from './MenuBlogLeftCard';
import MenuBlogRightCard from './MenuBlogRightCard';

const MenuBlog = ({pageLeftData, pageRightData, pageName}) => {
    const dispatch = useDispatch();
    dispatch(suggestionAction(pageLeftData));
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
