import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import MobileNav from '../components/MobileNav';
import VideoSection from '../components/VideoSection';
import SecondAnimation from '../components/SecondAnimation';
import Footer from '../components/Footer';
import FourthAnimationExtended from '../components/FourthAnimationExtended';

import Opportunities from '../components/OpportunitiesSection';
import { gsap } from 'gsap';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    z-index: 3;
    background-color: white;
`;

const IndexPage = () => {
    useEffect(() => {
        gsap.to('body', 0, { css: { visibility: 'visible'} });
    }, []);

    return (
        <Wrapper>
            <Nav />
            <MobileNav />
            <VideoSection />
            <SecondAnimation />
            <Opportunities />
            <FourthAnimationExtended />
            <Footer />
        </Wrapper>
    );
};

export default IndexPage;
