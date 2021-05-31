import React from 'react';
import Hero from '../components/hero/Hero';
import Layout from '../components/shared/Layout';

const About = () => {
    return (
        <>
            <Layout>
                <Hero hero="about-hero">
                    <h1 className="about-title">About us</h1>
                </Hero>
                <div className="about-details">
                    <div className="about-content">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default About;