import React, { useEffect } from 'react';

import { gsap } from 'gsap';
import styled from 'styled-components';

import Nav from '../components/staticComponents/Nav';
import MobileNav from '../components/staticComponents/MobileNav';
import VideoSection from '../components/pages/homePage/VideoSection';
import ConquerTheWorld from '../components/pages/homePage/ConquerTheWorld';
import CreativeEnvironment from '../components/pages/homePage/CreativeEnvironment';
import EnjoyTheOportunities from '../components/pages/homePage/EnjoyTheOportunities';
import Footer from '../components/staticComponents/Footer';
import Patronite from '../components/pages/homePage/Patronite';

const Wrapper = styled.div`
    position: relative;
    z-index: 3;
    background-color: white;
    overflow-x: hidden;
`;

const IndexPage = () => {
    useEffect(() => {
        gsap.to('body', 0, { css: { visibility: 'visible' } });
    }, []);

    return (
        <Wrapper>
            <Nav />
            <MobileNav />
            <VideoSection />
            <ConquerTheWorld />
            <EnjoyTheOportunities />
            <CreativeEnvironment />
            <Patronite />
            <Footer />
        </Wrapper>
    );
};

export default IndexPage;
