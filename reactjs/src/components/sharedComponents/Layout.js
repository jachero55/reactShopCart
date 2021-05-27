import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

//We are going to include all the components that are shared here. The footer, header and main
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;