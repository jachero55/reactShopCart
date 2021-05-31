import React, { useState } from 'react';
import Hero from '../components/hero/Hero';
import Layout from '../components/shared/Layout';

const Contact = () => {
    return (
        <>
            <Layout>
                <Hero hero="contact-hero">
                    <h1 className="about-title">Get In Touch</h1>
                </Hero>
                <div className="contact-container">
                    <div className="contact-section">
                        <div className="contact-form">
                            <form>
                                <div className="input-flex">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name <span>*</span></label>
                                        <input type="text" name="firstName" id="firstName" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name <span>*</span></label>
                                        <input type="text" name="lastName" id="lastName" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email <span>*</span></label>
                                    <input type="email" name="email" id="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">What can I help you with? <span>*</span></label>
                                    <textarea type="text" name="message" id="message" />
                                </div>
                                <button type="submit">Submit</button>
                                <p className="spam">I promise I won't sent you any spam email</p>
                            </form>
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Contact;