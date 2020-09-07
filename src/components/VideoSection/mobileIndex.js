import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import videoSrc from '../../assets/videos/video.mp4';
import Description from './Description';
import mobileImgSrc from '../../assets/images/video-mobile.png';
import { gsap } from 'gsap';
import SocialMedia from './SocialMedia';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Container = styled.div`
    position: relative;
    display: none;
    visibility: hidden;
    @media screen and (max-width: 900px) {
        display: block;
        visibility: visible;
    }
`;
const Section = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: fill;
    height: ${({ theme: { sizes } }) => `calc(100vh - ${sizes.navigationHeight}`})};

    ${({ fullHeight }) =>
        fullHeight &&
        css`
            height: 100vh;
        `}
`;
const Title = styled.h1`
    position: absolute;
    width: 332px;
    height: 212px;
    left: 25px;
    top: 354px;

    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 110%;
    /* or 53px */

    color: #ffffff;
`;
const StyledImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
`;

const VideoSection = ({ navRef }) => {
    return (
        <Container>
            <Section>
                <StyledImg src={mobileImgSrc} alt="skyscraper" />
                <Title>SOCIAL & COMMERCIAL MINDS</Title>
            </Section>
            <Section fullHeight>
                <StyledImg src={mobileImgSrc} alt="skyscraper" />
                <Description />
            </Section>
        </Container>
    );
};
export default VideoSection;
