import React from 'react';
import { useSelector } from 'react-redux';
// Import components
import MenuBlog from '../menuBlog/MenuBlog';

const Hollywood = () => {
    const pageName = useSelector(state => state.hollywoodLeft.pageName);
    const pageLeftData = useSelector(state => state.hollywoodLeft.pageLeftData);
    return (
        <div className="hollywood">  
            <MenuBlog 
             pageName={pageName}
             pageLeftData={pageLeftData}
            />
        </div>
    );
};

export default Hollywood;
