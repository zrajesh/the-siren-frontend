import React from 'react';
import { useSelector } from 'react-redux';
// Import components
import MenuBlog from '../menuBlog/MenuBlog';


const Fitness = () => {
    const pageName = useSelector(state => state.fitnessLeft.pageName);
    const pageLeftData = useSelector(state => state.fitnessLeft.pageLeftData);
    return (
        <div className="bollywood">  
            <MenuBlog 
             pageName={pageName}
             pageLeftData={pageLeftData}
            />
        </div>
    );
};

export default Fitness;