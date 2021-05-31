import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { CartContext } from '../../context/cart-context';
import './cart.scss';

const CartIcon = ({ history }) => {
    const { itemCount, cartItems } = useContext(CartContext);
    console.log('MY CART ITEMS', cartItems);
    return (
        <div className="cart-icon-container">
            <button className="bag-btns" onClick={() => history.push('/cart')}>{<HiOutlineShoppingBag />}</button>
            {itemCount > 0 ? <span className="item-count">{itemCount}</span> : <span className="item-count">0</span>}
        </div>
    )
}

export default withRouter(CartIcon);