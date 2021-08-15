import React from 'react';
import { useSelector } from 'react-redux';
// Import components
import MenuBlog from '../menuBlog/MenuBlog';
// Import css
import "./Fitness.scss";

const Fitness = () => {
    const pageName = useSelector(state => state.fitnessLeft.pageName);
    const pageLeftData = useSelector(state => state.fitnessLeft.pageLeftData);
    const pageRightData = useSelector(state => state.fitnessRight.pageRightData);
    return (
        <div className="bollywood">  
            <MenuBlog 
             pageName={pageName}
             pageLeftData={pageLeftData}
             pageRightData={pageRightData}/>
        </div>
    );
};

export default Fitness;