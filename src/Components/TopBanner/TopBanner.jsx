import React from 'react';
import './TopBanner.css';
import top from '../../assets/images/top.png';
import TopBannerData from '../Data/TopBannerData';

const TopBanner = () => {
    return (
        <div className="top-banner">
            <div className='container'>
            <img className='d-block mx-auto py-3' src={top} alt="" />
                <div className="row">
                    {TopBannerData.map((data, index) => 
                        <div key={index} style={{borderRadius: '50px'}} className="col m-2 bg-white m-2">
                            <img src={data.img} width='50' className='img-fluid py-2' alt="" />
                            <a className='text-decoration-none text-dark fw-bold ps-2' href={data.url}>{data.title}</a>
                        </div>    
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopBanner;