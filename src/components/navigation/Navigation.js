// Imports
import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link className="nav-item" to="/">Home</Link>
                    <Link className="nav-item" to="/bollywood">Bollywood</Link>
                    <Link className="nav-item" to="/technology">Technology</Link>
                    <Link className="nav-item" to="/hollywood">Hollywood</Link>
                    <Link className="nav-item" to="/fitness">Fitness</Link>
                    <Link className="nav-item" to="/food">Food</Link>
                </div>
                <hr className="nav-hr" />
            </div>
        </div>
    );
};

export default Navigation;
