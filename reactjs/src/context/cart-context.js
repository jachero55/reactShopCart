//Creating cart context
import React, { createContext, useReducer } from 'react';
import cartReducer from './cart-reducer';

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, total: 0 };

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    //action creator
    const addProduct = (product) => dispatch({ type: 'ADD_ITEM', payload: product });
    //Increase function
    const increase = (product) => dispatch({ type: 'INCREASE', payload: product });
    const decrease = (product) => dispatch({ type: 'DECREASE', payload: product })

    const contextValues = {
        ...state,
        addProduct,
        increase,
        decrease,
    }
    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;