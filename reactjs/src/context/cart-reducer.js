//Helper function
export const sumItems = cartItems => {
    return {
        itemCount: cartItems.reduce((total, prod) => total + prod.quantity, 0),
        total: cartItems.reduce((total, prod) => total + (prod.price * prod.quantity), 0)
    }
}

//Creating reducer for the cart
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            //CHECK IF ITEM IS IN CART
            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems),
            }

        case 'INCREASE':
            const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            state.cartItems[increaseIndex].quantity++;
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems),
            }
        case 'DECREASE':
            const decreaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            const product = state.cartItems[decreaseIndex];
            //check if quantity is greater than one
            if (product.quantity > 1) {
                product.quantity--;
            }
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems),
            }
        default:
            return state;
    }
}

export default cartReducer;