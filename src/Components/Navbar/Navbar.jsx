 import React from 'react';
import './Navbar.css';
import navbarData from './../Data/NavbarData';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto text-center">
                    {navbarData.map((items) => 
                        <li key={items.id} className="nav-item">
                            <a className="nav-link" href="/">{items.list}</a>
                        </li>
                    )}
                    
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;