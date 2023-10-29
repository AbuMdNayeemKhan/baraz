import React from 'react';
import './FlashSale.css';
import flashSaleData from './../Data/FlashSaleData';

const FlashSale = () => {
    return (
        <div className='primary-bg'>
            <div className='container py-5 bg-color'>
            <h2 className='fs-5'>FLASH SALE</h2>
            <div className="d-flex flex-wrap flashsale-container">
                {flashSaleData.map((data, index) =>
                    <div key={index} className="col-lg-2 col-md-4 col-sm-6">
                    <img src={data.image} alt="" className='img-fluid p-2' />
                    <p className="card-title">{data.name}</p>
                    <h3 className="card-price">৳ {data.price}</h3>
                    <h4 className='card-text'> <strick className="text-muted">৳ {data.prevPrice}</strick> - {data.percentage} %</h4>
                </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default FlashSale;