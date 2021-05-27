import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import './header.scss';

const Header = () => {
    return (
        <div className="header-container">
            <nav className="navbar">
                <div className="logo"><Link to="/">Lily's Store</Link></div>
                <div className="nav-items">
                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="cart-icon-container">
                    <button className="bag-btn">{<HiOutlineShoppingBag />}</button>
                </div>
            </nav>
        </div>
    )
}

export default Header;