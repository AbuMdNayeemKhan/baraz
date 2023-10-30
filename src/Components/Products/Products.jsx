import React from 'react';
import './Products.css';
const Products = (props) => {
    const products = props.Products;
    const title = props.title;
    return (
        <div className='primary-bg'>
            <div className='container py-5 bg-color'>
                <h2 className='fs-5'>{title}</h2>
                <div className="d-flex flex-wrap products-container">
                    {products.map((data, index) =>
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

export default Products;