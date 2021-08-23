import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';


function Navbar() {
    return (
        <div class="nav-bar">
        <Link to="/">
            <a href="/"class="title" title="Homepage">SuperTest</a>
        </Link>

        <Link to="/premium">
            <a href="/premium" class="premium">Premium</a>
        </Link>


        <Link to="/test">
            <a href="/test" class="premium">test</a>
        </Link>

        </div>
    );
}

export default Navbar;
