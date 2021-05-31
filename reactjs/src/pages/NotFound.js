import React from 'react';
import Hero from '../components/hero/Hero';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>

            <Hero hero="not-found-hero">
                <div className="not-found-container">
                    <h1 className="about-title">Page Not Found</h1>
                    <Link to="/">Back Home</Link>
                </div>
            </Hero>

        </>
    )
}

export default NotFound;