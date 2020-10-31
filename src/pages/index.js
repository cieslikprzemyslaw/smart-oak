import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import MobileNav from '../components/MobileNav';
import VideoSection from '../components/VideoSection';
import ProjetsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

import Opportunities from '../components/OpportunitiesSection';
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
            <ProjetsSection />
            {false && <Opportunities />}
            <DescriptionSection />
            <ThirdAnimation></ThirdAnimation>
            <Footer />
        </>
    );
};

export default IndexPage;
