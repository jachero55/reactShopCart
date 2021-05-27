import React from 'react';
import './banner.scss';

const Banner = ({ children, title, subTitle }) => {
    return (
        <div className="banner-container">
            <h1>{title}</h1>
            <div></div>
            <h2>{subTitle}</h2>
            {children}
            <button className="shop-now-btn" to="/shop">Shop Now</button>
        </div>
    )
}

export default Banner;