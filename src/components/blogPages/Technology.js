import React from 'react';
import { useSelector } from 'react-redux';
// Import components
import MenuBlog from '../menuBlog/MenuBlog';
// Import css
import "./Technology.scss";

const Technology = () => {
    const pageName = useSelector(state => state.technologyLeft.pageName);
    const pageLeftData = useSelector(state => state.technologyLeft.pageLeftData);
    const pageRightData = useSelector(state => state.technologyRight.pageRightData);
    return (
        <div className="bollywood">  
            <MenuBlog 
             pageName={pageName}
             pageLeftData={pageLeftData}
             pageRightData={pageRightData}/>
        </div>
    );
};

export default Technology;
