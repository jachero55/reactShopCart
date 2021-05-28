import React from 'react';
import './featured.scss';

const Featured = (product) => {
    const { title, imageUrl, price } = product;
    return (
        <div className="featured-product">
            <div className="featured-image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="product-details">
                <h3>{title}</h3>
                <p>${price}</p>
                <button className="addToCartBtn">ADD TO CART</button>
            </div>
        </div>
    )
}

export default Featured;

//This component is used by the featuredCollection component