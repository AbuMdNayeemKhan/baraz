import React from 'react';
import './TopBanner.css';
import feature1 from '../../assets/images/feature1.png';
import feature2 from '../../assets/images/feature2.png';
import feature3 from '../../assets/images/feature3.png';
import feature4 from '../../assets/images/feature4.png';
import feature5 from '../../assets/images/feature5.gif';

const TopBanner = () => {
    return (
        <div className="top-banner">
            <div className='container'>
            <img src="" alt="" />
                <div className="row">
                    <div style={{borderRadius: '50px'}} className="col m-2 bg-white m-2">
                        <img src={feature1} width='50' className='img-fluid py-2' alt="" />
                        <a className='text-decoration-none text-dark fw-bold ps-2' href="/">Free Shipping</a>
                    </div>
                    <div style={{borderRadius: '50px'}} className="col m-2 bg-white m-2">
                        <img src={feature2} width='50' className='img-fluid py-2' alt="" />
                        <a className='text-decoration-none text-dark fw-bold ps-2' href="/">Grocery Shopping</a>
                    </div>
                    <div style={{borderRadius: '50px'}} className="col m-2 bg-white m-2">
                        <img src={feature3} width='50' className='img-fluid py-2' alt="" />
                        <a className='text-decoration-none text-dark fw-bold ps-2' href="/">Baraz Mall</a>
                    </div>
                    <div style={{borderRadius: '50px'}} className="col m-2 bg-white m-2">
                        <img src={feature4} width='50' className='img-fluid py-2' alt="" />
                        <a className='text-decoration-none text-dark fw-bold ps-2' href="/">Digital Sheba</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;