// Imports
import React from 'react';
import { Link } from 'react-router-dom';
// Nav items import
import { NavItems } from './ItemNames';
// Import css
import "./Navigation.scss";

const Navigation = () => {
    return (
        <div className="nav-main">
            <div className="nav-header">
                <div className="brand-wrap">
                <p className="vertical">The</p>
                <p className="brand-name">Siren</p>
                </div>
                <div className="menu-icon">
                <label htmlFor="check">
                <i className="menu-btn fas fa-bars"></i>
                </label>
                </div>
            </div>
            <div className="nav-items-wrap">
                <div className="nav-items">
                    <input type="checkbox" id="check" />
                    {
                        NavItems.map((item, index) => (
                            <Link
                             key={index}
                             className="nav-item" 
                             to={item.url}
                            >
                            {item.name}
                            </Link>
                        ))
                    }
                </div>
                <hr className="nav-hr" />
            </div>
        </div>
    );
};

export default Navigation;
