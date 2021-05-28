import React from 'react';
import { withRouter } from 'react-router-dom';
import './banner.scss';

const Banner = ({ children, title, subTitle, history }) => {
    return (
        <div className="banner-container">
            <h1>{title}</h1>
            <div></div>
            <h2>{subTitle}</h2>
            {children}
            <button className="shop-now-btn" onClick={() => history.push('/singleItem/1')}>Shop Now</button>
        </div>
    )
}

export default withRouter(Banner);