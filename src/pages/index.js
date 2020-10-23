import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import MobileNav from '../components/MobileNav';
import VideoSection from '../components/VideoSection';
import ProjetsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

import Opportunities from '../components/OpportunitiesSection';
import Describtion from '../components/DescriptionSection';
import { gsap } from 'gsap';

const IndexPage = () => {
    useEffect(() => {
        gsap.to('body', 0, { css: { visibility: 'visible', backgroundColor:"#303030" } });
    }, []);
    return (
        <>
            <Nav />
        </>
    );
};

export default IndexPage;
