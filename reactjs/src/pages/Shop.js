import React, { useContext } from 'react';
import Layout from '../components/shared/Layout';
import Featured from '../components/shared/Featured';
import { ProductsContext } from '../context/product';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    const allProducts = products.map(product => (
        <Featured {...product} key={product.id} />
    ))
    return (
        <Layout>
            <div className="all-products-container">
                <h2 className="all-products-title">Shop</h2>
                <div className="product-list">
                    {allProducts}
                </div>
            </div>
        </Layout>
    )
}

export default Shop;
