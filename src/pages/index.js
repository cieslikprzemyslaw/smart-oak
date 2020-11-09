import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import MobileNav from '../components/MobileNav';
import VideoSection from '../components/VideoSection';
import SecondAnimation from '../components/SecondAnimation';
import Footer from '../components/Footer';
import FourthAnimationExtended from '../components/FourthAnimationExtended';

import DescriptionSection from '../components/DescriptionSection';
import { gsap } from 'gsap';
import ThirdAnimation from '../components/ThirdAnimation';

const IndexPage = () => {
    useEffect(() => {
        gsap.to('body', 0, { css: { visibility: 'visible' } });
    }, []);

    return (
        <>
            <Nav />
            <MobileNav />
            <VideoSection />
            <SecondAnimation />
            <ThirdAnimation />
            <DescriptionSection />
            <FourthAnimationExtended />
            <Footer />
        </>
    );
};

export default IndexPage;
