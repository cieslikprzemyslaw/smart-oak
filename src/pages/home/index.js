import React from 'react';

import Nav from '../../components/Nav';
import MobileNav from '../../components/MobileNav';
import VideoSection from './VideoSection';
import SecondAnimation from './SecondAnimation';
import ThirdAnimation from './ThirdAnimation';
import FourthAnimationExtended from './FourthAnimationExtended';
import Footer from '../../components/Footer';
import {Wrapper} from './styles';

const Home = () => {

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

export default Home;