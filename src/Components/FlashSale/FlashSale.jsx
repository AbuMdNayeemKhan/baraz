import React from 'react';
import './FlashSale.css';
import f1 from '../../assets/images/f1.jpg';
import f2 from '../../assets/images/f2.jpg';
import f3 from '../../assets/images/f3.jpg';
import f4 from '../../assets/images/f4.jpg';
import f5 from '../../assets/images/f5.jpg';
import f6 from '../../assets/images/f6.jpg';

const FlashSale = () => {
    return (
        <div className='primary-bg'>
            <div className='container py-5 bg-color'>
            <h2 className='fs-5'>FLASH SALE</h2>
            <div className="d-flex flex-wrap flashsale-container">
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src={f1} alt="" className='img-fluid p-2' />
                    <p className="card-title">Buds Air wireless Bluetooth Headsets in Ear...</p>
                    <h3 className="card-price">৳ 400</h3>
                    <h4 className='card-text'> <strick className="text-muted">৳ 600</strick> -33%</h4>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src={f2} alt="" className='img-fluid p-2' />
                    <p className="card-title">Vivo/Oppo/MI in Ear Earphone Good Bass...</p>
                    <h3 className="card-price">৳ 135</h3>
                    <h4 className='card-text'> <strick className="text-muted">৳ 200</strick> -33%</h4>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src={f3} alt="" className='img-fluid p-2' />
                    <p className="card-title">TWS i7s Double Dual Mini Earphone With Power Cas...</p>
                    <h3 className="card-price">৳ 248</h3>
                    <h4 className='card-text'> <strick className="text-muted">৳ 700</strick> -65%</h4>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src={f4} alt="" className='img-fluid p-2' />
                    <p className="card-title">Vivo In Ear Earphone Best Sound quality for any...</p>
                    <h3 className="card-price">৳ 131</h3>
                    <h4 className='card-text'> <strick className="text-muted">৳ 200</strick> -35%</h4>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src={f5} alt="" className='img-fluid p-2' />
                    <p className="card-title">01 Pcs Anti Rfid Card Holder NFC Blocking</p>
                    <h3 className="card-price">৳ 26</h3>
                    <h4 className='card-text'> <strick className="text-muted">৳ 36</strick> -35%</h4>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <img src={f6} alt="" className='img-fluid p-2' />
                    <p className="card-title">Electric Hot Water Bag pain remover [Multicolor]</p>
                    <h3 className="card-price">৳ 163</h3>
                    <h4 className='card-text'> <strick className="text-muted">৳ 550</strick> -70%</h4>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FlashSale;