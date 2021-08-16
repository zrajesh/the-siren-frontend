import React from 'react';
import { useSelector } from 'react-redux';
// Import components
import MenuBlog from '../menuBlog/MenuBlog';

const Bollywood = () => {
    const pageName = useSelector(state => state.bollywoodLeft.pageName);
    const pageLeftData = useSelector(state => state.bollywoodLeft.pageLeftData);
    const pageRightData = useSelector(state => state.bollywoodRight.pageRightData);
    return (
        <div className="bollywood">  
            <MenuBlog 
             pageName={pageName}
             pageLeftData={pageLeftData}
             pageRightData={pageRightData}/>
        </div>
    );
};

export default Bollywood;
