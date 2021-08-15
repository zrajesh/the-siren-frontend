import React from 'react';
import { useSelector } from 'react-redux';
// Import components
import MenuBlog from '../menuBlog/MenuBlog';
// Import css
import "./Hollywood.scss";

const Hollywood = () => {
    const pageName = useSelector(state => state.hollywoodLeft.pageName);
    const pageLeftData = useSelector(state => state.hollywoodLeft.pageLeftData);
    const pageRightData = useSelector(state => state.hollywoodRight.pageRightData);
    return (
        <div className="hollywood">  
            <MenuBlog 
             pageName={pageName}
             pageLeftData={pageLeftData}
             pageRightData={pageRightData}/>
        </div>
    );
};

export default Hollywood;
