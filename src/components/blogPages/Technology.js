import React from 'react';
import { useSelector } from 'react-redux';
// Import components
import MenuBlog from '../menuBlog/MenuBlog';


const Technology = () => {
    const pageName = useSelector(state => state.technologyLeft.pageName);
    const pageLeftData = useSelector(state => state.technologyLeft.pageLeftData);
    const pageRightData = useSelector(state => state.technologyRight.pageRightData);
    return (
        <div className="technology">  
            <MenuBlog 
             pageName={pageName}
             pageLeftData={pageLeftData}
             pageRightData={pageRightData}/>
        </div>
    );
};

export default Technology;
