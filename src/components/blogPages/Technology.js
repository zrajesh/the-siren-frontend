import React, { useState } from 'react';
// Import components
import MenuBlog from '../menuBlog/MenuBlog';
// Import css
import "./Technology.scss";

const Technology = () => {
    const [test, setTaste] = useState([1, 2, 3, 4, 5,])
    const [pageName, setPageName] = useState("Technology")
    return (
        <div className="technology">  
            {test.map(item => (
                <MenuBlog key={item} item={item} pageName={pageName}/>
            ))}
        </div>
    );
};

export default Technology;
