import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import videoSrc from '../../assets/videos/video.mp4';
import { gsap } from 'gsap';

import Description from './Description';
import logoSrc from '../../assets/images/smart-oak-platform-logo.svg';

const Container = styled.div`
    position: relative;
    height: calc(100vh - 4.5rem);
    z-index: 3;
`;
const TextContainer = styled.div`
    position: relative;
    height: 100%;
`;

const VideoWrapper = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 3;
`;

const StyledLogo = styled.img`
    z-index: 3;
    will-change: opacity, scale;
    width: 90rem;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 1100px) {
        width: 70rem;
    }
    @media screen and (max-width: 600px) {
        width: 90%;
    }
`;

const VideoSection = () => {
    const imgRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(imgRef.current, {
            skewX: 0.01,
            transformOrigin: 'center',
            scale: 0.6,
            opacity: 0,
            duration: 3,
            delay: 0.5,
        })
            .to(imgRef.current, {
                skewX: 0.01,
                scale: 0.95,
                opacity: 0,
                duration: 1.5,
                delay: 2,
            })
            .from(descRef.current.children, {
                skewX: 0.01,
                transformOrigin: 'center',
                duration: 1,
                x: '-=40',
                opacity: 0,
                stagger: 0.1,
            });
    }, []);

    return (
        <Container>
            <VideoWrapper muted autoPlay preload="auto" loop playsinline>
                <source src={videoSrc} type="video/mp4" />
            </VideoWrapper>
            <TextContainer>
                <StyledLogo src={logoSrc} alt="" ref={imgRef} />
                <Description forwardRef={descRef} />
            </TextContainer>
        </Container>
    );
};
export default VideoSection;
