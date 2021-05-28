import React from 'react';
import { withRouter } from 'react-router-dom';
import './featured.scss';

const Featured = (props) => {
    const { title, imageUrl, price, history, id } = props;
    return (
        <div className="featured-product">
            <div className="featured-image" onClick={() => history.push(`/singleItem/${id}`)}>
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

export default withRouter(Featured);

//This component is used by the featuredCollection component