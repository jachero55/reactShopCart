import React, { useContext } from 'react';
import { ProductsContext } from '../../context/product';
import FeaturedProduct from '../shared/Featured';
// import './featured.scss';

const Related = () => {
    const { products } = useContext(ProductsContext);

    const productItems = products.filter((product, i) => i > 3 && i < 8).map(product => (

        <FeaturedProduct {...product} key={product.id} />
    ));
    return (
        <div className="featured-collection">
            <h2 className="featured-title">You might also Like</h2>
            <div className="products">
                {productItems}
            </div>
        </div>
    )
}

export default Related;