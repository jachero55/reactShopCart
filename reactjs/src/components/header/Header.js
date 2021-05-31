import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import CartIcon from '../cart-icon/CartIcon';
import './header.scss';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <div className="header-container">
            <nav className="navbar">
                <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <FaTimes /> : <FaBars />}
                </button>
                <div className="logo"><NavLink to="/">Lily's<span className="logo-span">Pastries</span></NavLink></div>
                <div className="nav-items">
                    <ul className={isMobile ? "nav-links-mobile active" : "nav-links"} onClick={() => setIsMobile(false)}>
                        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                    </ul>
                </div>
                <CartIcon />
            </nav>
        </div>
    )
}

export default Header;