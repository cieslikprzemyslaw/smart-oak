import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import videoSrc from '../../assets/videos/video.mp4';
import mobileImgSrc from '../../assets/images/video-mobile.png';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MobileSection from './mobileIndex';
import Description from './Description';
const Container = styled.div`
    position: relative;
`;
const VideoWrapper = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    @media screen and (max-width: 900px) {
        display: none;
        visibility: hidden;
    }
`;
const DesktopWrapper = styled.div`
height: ${({ theme: { sizes } }) => `calc(100vh - ${sizes.navigationHeight}`})};
    @media screen and (max-width: 900px) {
        display: none;
        visibility: hidden;
    }
`;
const TextContainer = styled.div`
    position: absolute;
`;

const Title = styled.h1`
    color: #fff;
    position: absolute;
    width: 650px;
    height: 306px;
    left: 76px;
    top: 269px;
    font-weight: bold;
    font-size: 9.6rem;
    line-height: 106%;
`;

const VideoSection = ({ navRef }) => {
    const titleRef = useRef(null);
    const descRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            // todo after adding some others sections.
            // scrollTrigger: {
            //     trigger: '.pinSection',
            //     id: 'test',
            //     markers: true,
            //     scrub: 0.1,
            //     pin: '.pinSection',
            //     // pinSpacing: false,
            //     once: true,
            // },
        });
        tl.from(titleRef.current, { opacity: 0, y: '+=15' })
            .to(titleRef.current, {
                opacity: 0,
                y: '-=15',
                duration: 1.5,
                delay: 2,
            })
            .from(descRef.current.children, {
                opacity: 0,
                y: '+=50',
            });
    }, []);

    const passRef = (ref) => {};
    return (
        <Container>
            <DesktopWrapper>
                <VideoWrapper muted autoPlay preload="auto" playsinline>
                    <source src={videoSrc} type="video/mp4" />
                </VideoWrapper>
                <TextContainer>
                    <Title ref={titleRef}>SMART OAK PLATFORM</Title>
                    <Description forwardRef={descRef} />
                </TextContainer>
            </DesktopWrapper>
            <MobileSection />
        </Container>
    );
};
export default VideoSection;
