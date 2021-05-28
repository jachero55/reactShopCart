import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import './cart.scss';

const CartIcon = () => {
    return (
        <div className="cart-icon-container">
            <button className="bag-btn">{<HiOutlineShoppingBag />}</button>
            <span className="item-count">8</span>
        </div>
    )
}

export default CartIcon;