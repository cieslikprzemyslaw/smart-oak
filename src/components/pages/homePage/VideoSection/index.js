import React, { useEffect, useRef, useState } from 'react';

import videoSrc from '../../../../assets/videos/video.mp4';
import Description from './Description';
import logoSrc from '../../../../assets/images/smart-oak-platform-logo.svg';
import { animationForVideoSection } from './useAnimate';
import { Container, VideoWrapper, TextContainer, StyledLogo, VideoOverlay } from './styles';

const VideoSection = () => {
    const imgRef = useRef(null);
    const descRef = useRef(null);
    const [isDisplayLogo, setIsDisplayLogo] = useState(true);

    useEffect(() => {
        animationForVideoSection(imgRef, descRef);
        setTimeout(()=> setIsDisplayLogo(false), 2500)
    }, []);

    return (
        <Container>
            <VideoOverlay />
            <VideoWrapper muted autoPlay preload="auto" loop playsinline>
                <source src={videoSrc} type="video/mp4" />
            </VideoWrapper>
            <TextContainer>
                {isDisplayLogo && <StyledLogo src={logoSrc} alt="" ref={imgRef} />}
                <Description forwardRef={descRef} />
            </TextContainer>
        </Container>
    );
};
export default VideoSection;
