import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import Layout from '../components/shared/Layout';
import CartItem from '../components/cart-items/CartItems';
import CartTotal from '../components/cart-items/CartTotal';

const Cart = () => {
    const { cartItems, itemCount, total } = useContext(CartContext);
    return (
        <Layout>
            <>
                <h1 className="cart-title">Cart</h1>
                {
                    cartItems.length === 0 ? <div className="empty-cart">Your Cart is empty</div>
                        :
                        <>
                            <div className="cart-page">
                                <div className="cart-item-container">
                                    {cartItems.map(item => <CartItem {...item} key={item.id} />)}
                                </div>
                                <CartTotal itemCount={itemCount} total={total} />
                            </div>
                        </>
                }
            </>
        </Layout>
    )
}

export default Cart;
