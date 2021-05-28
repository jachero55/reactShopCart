//We will be loading the shop data
import React, { createContext, useState } from 'react';
import ShopData from '../data/shopData';

export const ProductsContext = createContext();

//create the provider
const ProductContextProvider = ({ children }) => {
    const [products] = useState(ShopData);
    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductContextProvider;