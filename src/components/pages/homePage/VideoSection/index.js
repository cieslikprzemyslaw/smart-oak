import React, { useEffect, useRef } from 'react';

import videoSrc from '../../../../assets/videos/video.mp4';
import Description from './Description';
import logoSrc from '../../../../assets/images/smart-oak-platform-logo.svg';
import { animationForVideoSection } from './useAnimate';
import {Container, VideoWrapper, TextContainer, StyledLogo } from './styles'

const VideoSection = () => {
    const imgRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        animationForVideoSection(imgRef, descRef);
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
