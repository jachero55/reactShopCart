import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { SiGooglemaps } from 'react-icons/si';
import './footer.scss';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="map">
                        <h4><SiGooglemaps /></h4>
                        <a href="http://maps.google.com/?q=4205 Long Key Lane, Winter Park, FL">4205 Long Key Lane, Orlando, Florida, 32972</a>
                    </div>
                    <div className="email">
                        <h4><AiTwotoneMail /></h4>
                        <a href="mailto:johnacherowebdeveloper@yahoo.com">johnacherowebdeveloper@yahoo.com</a>
                    </div>
                    <div className="phone">
                        <h4><FaPhone /></h4>
                        <a href="tel:515-943-8306">515-943-8306</a>
                    </div>
                </div>
                <hr />
                <div className="secondaryFooter">
                    <p>&copy;{new Date().getFullYear()} John K. Achero | All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;