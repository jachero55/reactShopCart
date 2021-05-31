import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { RiAddLine } from 'react-icons/ri';
import { FiMinus } from 'react-icons/fi';
import './cart-item.scss';

const CartItem = (product) => {
    const { title, imageUrl, price, quantity } = product;
    return (
        <div className="cart-item">
            <div className="product-content">
                <div className="item-image">
                    <img src={imageUrl} alt={title} />
                </div>
                <div className="name-price">
                    <h4>{title}</h4>
                    <p>${price}</p>
                </div>
            </div>
            <div className="quantity">
                <p>{`Quantity: ${quantity}`}</p>
            </div>
            <div className="btns-container">
                <button className="addBtn">{<RiAddLine />}</button>
                {quantity === 1 && <button className="trash">{<FaRegTrashAlt />}</button>}
                {quantity > 1 && <button className="minus">{<FiMinus />}</button>}
            </div>
        </div>
    )
}

export default CartItem;