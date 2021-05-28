import React from 'react';
import { withRouter } from 'react-router-dom';
import Coffee from '../../assets/coffee.jpg'
import './mainSection.scss';


const MainSection = ({ history }) => {
    return (
        <div className="main-section-container">
            <div className="main-section-middle">
                <div className="main-image">
                    <img src={Coffee} alt="high top shoes" />
                </div>
                <div className="main-description">
                    <h2>Try our new Coffee</h2>
                    <p>You can now have hot or cold coffee at an affordable price from us. We made it from scratch, please let us know in advance how you want it made.</p>
                    <button className="coffee-btn" id="shop-now" onClick={() => history.push('/singleItem/1')}>HOT COFFEE</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MainSection);