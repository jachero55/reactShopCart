import React, { useContext } from 'react';
import { ProductsContext } from '../../context/product';
import FeaturedProduct from '../shared/Featured';
import './featured.scss';

const FeaturedCollection = () => {
    const { products } = useContext(ProductsContext);

    const productItems = products.filter((product, i) => i < 4).map(product => (
        <FeaturedProduct {...product} key={product.id} />
    ));
    return (
        <div className="featured-collection">
            <h2 className="featured-title">Today's Special</h2>
            <div className="products">
                {productItems}
            </div>
        </div>
    )
}

export default FeaturedCollection;

//inside the shared folder there is a featured file which this component uses and we are also using the context
//to get the products