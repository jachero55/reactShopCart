import React, { useContext } from 'react';
import { isInCart } from '../../helpers';
import { withRouter } from 'react-router-dom';
import './featured.scss';
import { CartContext } from '../../context/cart-context';

const Featured = (props) => {
    const { title, imageUrl, price, history, id, description } = props;
    const product = { title, price, imageUrl, id, description };
    const { addProduct, cartItems, increase } = useContext(CartContext);
    const itemInCart = isInCart(product, cartItems);
    return (
        <div className="featured-product">
            <div className="featured-image" onClick={() => history.push(`/singleItem/${id}`)}>
                <img src={imageUrl} alt={title} />
            </div>
            <div className="product-details">
                <h3>{title}</h3>
                <p>${price}</p>
                {
                    !itemInCart &&
                    <button className="addToCartBtn" onClick={() => addProduct(product)}>ORDER</button>
                }
                {
                    itemInCart &&
                    <button className="addToCartBtn" onClick={() => increase(product)}>ORDER MORE</button>
                }
            </div>
        </div>
    )
}

export default withRouter(Featured);

//This component is used by the featuredCollection component