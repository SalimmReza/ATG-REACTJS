import React from 'react';
import header from '../../../Assets/header.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className=' position-relative'>
            <img className='w-100 header' src={header} alt="" />
            <div className='details text-white d-flex  flex-column align-items-start'>
                <h1 className='title '>Computer Engineering</h1>
                <p>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
};

export default Banner;