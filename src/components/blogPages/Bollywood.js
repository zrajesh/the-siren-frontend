import React from 'react';
import { useSelector } from 'react-redux';
// Import components
import MenuBlog from '../menuBlog/MenuBlog';

const Bollywood = () => {
    const pageName = useSelector(state => state.bollywoodLeft.pageName);
    const pageLeftData = useSelector(state => state.bollywoodLeft.pageLeftData);
    return (
        <div className="bollywood">  
            <MenuBlog 
             pageName={pageName}
             pageLeftData={pageLeftData}
            />
        </div>
    );
};

export default Bollywood;
