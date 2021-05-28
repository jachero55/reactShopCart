import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import CartIcon from '../cart-icon/CartIcon';
import './header.scss';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <div className="header-container">
            <nav className="navbar">
                <button class="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <FaTimes /> : <FaBars />}
                </button>
                <div className="logo"><Link to="/">Lily's<span className="logo-span">Store</span></Link></div>
                <div className="nav-items">
                    <ul className={isMobile ? "nav-links-mobile active" : "nav-links"} onClick={() => setIsMobile(false)}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <CartIcon />
            </nav>
        </div>
    )
}

export default Header;