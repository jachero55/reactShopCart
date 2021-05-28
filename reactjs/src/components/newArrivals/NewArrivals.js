import React, { useContext } from 'react';
import { ProductsContext } from '../../context/product';
import Featured from '../shared/Featured';


const Arrival = () => {
    const { products } = useContext(ProductsContext);

    const productItems = products.filter((product, i) => i > 4 && i < 9).map(product => (
        <Featured {...product} key={product.id} />
    ));
    return (
        <div className="featured-collection">
            <h2 className="featured-title">New Items</h2>
            <div className="products">
                {productItems}
            </div>
        </div>
    )
}

export default Arrival;
