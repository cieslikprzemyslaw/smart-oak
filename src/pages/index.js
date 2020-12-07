import React, { useEffect } from 'react';
import Nav from '../components/staticComponents/Nav';
import MobileNav from '../components/staticComponents/MobileNav';
import VideoSection from '../components/VideoSection';
import SecondAnimation from '../components/SecondAnimation';
import Footer from '../components/staticComponents/Footer';
import FourthAnimationExtended from '../components/FourthAnimationExtended';

import ThirdAnimation from '../components/ThirdAnimation';
import { gsap } from 'gsap';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    z-index: 3;
    background-color: white;
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
            <SecondAnimation />
            <ThirdAnimation />
            <FourthAnimationExtended />
            <Footer />
        </Wrapper>
    );
};

export default IndexPage;
