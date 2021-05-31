import React from 'react';
import { withRouter } from 'react-router-dom';

const CartTotal = ({ itemCount, total, history }) => {
    return (
        <div className="total-container">
            <div className="total">
                <p>Total Items: {itemCount}</p>
                <p>{`Total: ${total}`}</p>
                <div className="checkout">
                    <button className="button-checkout" onClick={() => history.push('/checkout')}>CHECKOUT</button>
                    <button className="button-clear" onClick={() => history.push('/checkout')}>CLEAR</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CartTotal);
