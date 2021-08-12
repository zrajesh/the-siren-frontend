import React, { useState } from 'react';
// Import components
import MenuBlog from '../menuBlog/MenuBlog';
// Import css
import "./Bollywood.scss";

const Bollywood = () => {
    const [test, setTaste] = useState([1, 2, 3, 4, 5,])
    const [pageName, setPageName] = useState("Bollywood")
    return (
        <div className="bollywood">  
            {test.map(item => (
                <MenuBlog key={item} item={item} pageName={pageName} />
            ))}
        </div>
    );
};

export default Bollywood;
