import React, { useState } from 'react';
// Import components
import MenuBlog from '../menuBlog/MenuBlog';
// Import css
import "./Hollywood.scss";

const Hollywood = () => {
    const [test, setTaste] = useState([1, 2, 3, 4, 5,])
    const [pageName, setPageName] = useState("Hollywood")
    return (
        <div className="hollywood">  
            {test.map(item => (
                <MenuBlog key={item} item={item} pageName={pageName} />
            ))}
        </div>
    );
};

export default Hollywood;