import React from 'react';
import Description from '../components/pages/aboutUs/description';
import Download from '../components/pages/aboutUs/download';
import Footer from '../components/staticComponents/Footer';
import MobileNav from '../components/staticComponents/MobileNav';
import Nav from '../components/staticComponents/Nav';

const AboutUs = () => {
    return (
        <>
            <Nav/>
            <MobileNav/>
            <Description/>
            <Download/>
            <Footer/>
        </>
    );
};

export default AboutUs;