import React, { useContext, useState } from 'react';
import Layout from '../components/shared/Layout';
import Featured from '../components/shared/Featured';
import { ProductsContext } from '../context/product';

const Shop = () => {
    const [visible, setVisible] = useState(8);
    const showMoreProducts = async () => {
        setVisible(visible + 4);
    }
    const { products } = useContext(ProductsContext);
    const allProducts = products.slice(0, visible).map(product => (
        <Featured {...product} key={product.id} />
    ))
    return (
        <Layout>
            <div className="all-products-container">
                <h2 className="all-products-title">Shop</h2>
                <div className="product-list">
                    {allProducts}
                </div>
                <div className="load-more-container">
                    {
                        visible < products.length &&
                        <button className="load-more" onClick={showMoreProducts}>LOAD MORE</button>
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Shop;
