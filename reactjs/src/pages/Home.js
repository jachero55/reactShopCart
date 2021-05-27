import React from 'react';
import Hero from '../components/hero/Hero';
import Banner from '../components/banner/Banner';
import Layout from '../components/sharedComponents/Layout';

const Home = () => {
    return (
        <>
            <Layout>
                <Hero>
                    <Banner title="Want to be noticed out there?"
                        subTitle="Take a look at our new arrivals section on how to be seen">
                    </Banner>
                </Hero>
            </Layout>
        </>
    )
}

export default Home;