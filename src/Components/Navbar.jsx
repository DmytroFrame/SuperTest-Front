import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';


function Navbar() {
    return (
        <div className="nav-bar">
        <Link to="/">
            <label className="title" title="Homepage">SuperTest</label>
        </Link>

        <Link to="/premium">
            <label className="premium">Premium</label>
        </Link>


        </div>
    );
}

export default Navbar;
