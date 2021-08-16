import React from 'react';
import { useSelector } from 'react-redux';
// Import components
import MenuBlog from '../menuBlog/MenuBlog';

const Food = () => {
    const pageName = useSelector(state => state.foodLeft.pageName);
    const pageLeftData = useSelector(state => state.foodLeft.pageLeftData);
    const pageRightData = useSelector(state => state.foodRight.pageRightData);
    return (
        <div className="food">  
            <MenuBlog 
             pageName={pageName}
             pageLeftData={pageLeftData}
             pageRightData={pageRightData}/>
        </div>
    );
};

export default Food;
