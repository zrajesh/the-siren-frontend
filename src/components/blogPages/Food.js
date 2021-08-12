import React, { useState } from 'react';
// Import components
import MenuBlog from '../menuBlog/MenuBlog';
// Import css
import "./Food.scss";

const Food = () => {
    const [test, setTaste] = useState([1, 2, 3, 4, 5])
    const [pageName, setPageName] = useState("Food")
    return (
        <div className="food">
            {test.map(item => (
                <MenuBlog key={item} item={item} pageName={pageName}/>
            ))}
        </div>
    );
};

export default Food;
