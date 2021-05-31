import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ProductsContext } from '../../context/product';
import { CartContext } from '../../context/cart-context';
import { isInCart } from '../../helpers';
import Layout from '../../components/shared/Layout';
import './singleProject.scss';
import Related from '../related/Related';

const SingleProduct = ({ match, history: { push } }) => {
    const { products } = useContext(ProductsContext);
    const { addProduct, cartItems, increase } = useContext(CartContext);
    const { id } = match.params;
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const product = products.find((item) => item.id === id);
        //if product is not there, redirect user to the shop page
        if (!product) {
            return push('/shop');
        }
        //other wise set the product
        setProduct(product)
    }, [id, product, push, products]);

    if (!product) {
        return null;
    }

    //pull out the product details
    const { imageUrl, title, price, description } = product;
    const itemInCart = isInCart(product, cartItems)
    return (
        <Layout>
            <div className="single-product-container">
                <div className="product-image">
                    <img src={imageUrl} alt={title} />
                </div>
                <div className="product-details">
                    <div className="name-price">
                        <h3>{title}</h3>
                        <p>${price}</p>
                    </div>
                    <div className="product-description">
                        <p>{description}</p>
                    </div>
                    <div className="cartButtons">
                        {!itemInCart &&
                            <button className="addToCartBtn" onClick={() => addProduct(product)}>ORDER</button>
                        }
                        {itemInCart &&
                            <button className="addToCartBtn" onClick={() => increase(product)}>ORDER MORE</button>
                        }
                        <button className="checkoutBtn">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
            <Related />
        </Layout>
    )
}

export default withRouter(SingleProduct);