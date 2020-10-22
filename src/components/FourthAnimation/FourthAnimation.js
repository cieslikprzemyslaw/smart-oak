import React from 'react';
import styled from 'styled-components';
// import { gsap } from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import ImageSrc from '../../assets/images/forest-background.png';
// import { useIntl } from 'gatsby-plugin-intl';

// gsap.registerPlugin(ScrollTrigger);

const FourthAnimation = () => {
    const DummySection = styled.section`
        display: block;
        background: black;
        height: 700px;
    `;
    return (
        <>
            <DummySection />
            Czwarta Animacja
            <DummySection />
        </>
    );
};

export default FourthAnimation;
