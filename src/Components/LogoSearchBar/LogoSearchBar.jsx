import React from 'react';
import './LogoSearchBar.css';
import logo from '../../assets/images/logo.png'

const LogoSearchBar = () => {
    return (
        <div className='container-fluid search-container pt-2 d-flex justify-content-center align-items-center'>
            <a href="/"><img className='img-fluid' width="150" src={logo} alt="" /></a>
            <input type="text" className='search-bar' placeholder="Search in baraz" />
            <button className=''>Search</button>
        </div>
    );
};

export default LogoSearchBar;