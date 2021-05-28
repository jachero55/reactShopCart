import React from 'react';
import Hero from '../components/hero/Hero';
import Banner from '../components/banner/Banner';
import Layout from '../components/shared/Layout';
import FeaturedCollection from '../components/featuredCollection/FeaturedCollection';
import Arrival from '../components/newArrivals/NewArrivals';
import MainSection from '../components/mainSection/MainSection';


const Home = () => {
    return (
        <>
            <Layout>
                <Hero>
                    <Banner title="We serve you nothing but the best"
                        subTitle="Buy one get one half price">
                    </Banner>
                </Hero>
                <FeaturedCollection />
                <Arrival />
                <MainSection />
            </Layout>
        </>
    )
}

export default Home;