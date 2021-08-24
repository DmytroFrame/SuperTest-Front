import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';


function Navbar() {
    return (
        <div className="nav-bar">
        <Link to="/">
            <a href="/"className="title" title="Homepage">SuperTest</a>
        </Link>

        <Link to="/premium">
            <a href="/premium" className="premium">Premium</a>
        </Link>


        </div>
    );
}

export default Navbar;
