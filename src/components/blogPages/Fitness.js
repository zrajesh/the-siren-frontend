import React, { useState } from 'react';
// Import components
import MenuBlog from '../menuBlog/MenuBlog';
// Import css
import "./Fitness.scss";

const Fitness = () => {
    const [test, setTaste] = useState([1, 2, 3, 4, 5])
    const [pageName, setPageName] = useState("Fitness")
    return (
        <div className="fitness">
            {test.map(item => (
                <MenuBlog key={item} item={item} pageName={pageName}/>
            ))}
        </div>
    );
};

export default Fitness;