import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import videoSrc from '../../assets/videos/video.mp4';
import mobileImgSrc from '../../assets/images/video-mobile.png';
import { gsap } from 'gsap';
import SocialMedia from './SocialMedia';
import ScrollTrigger from 'gsap/ScrollTrigger';

const positionAbsoluteNoTopAndLeft = css`
    position: absolute;
    top: 0;
    left: 0;
`;

const Section = styled.div`
    width: 100%;
    height: 100%;
    object-fit: fill;
    height: 100vh;

    @media only screen and (min-width: 900px) {
        position: absolute;
        left: 70px;
        top: 85px;
        width: 100%;
    }
`;

const DescriptionContainer = styled.div`
    ${positionAbsoluteNoTopAndLeft}

    @media only screen and (max-width: 900px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 120px;
        margin-left: 30px;
        margin-right: 30px;
    }
`;
const DescriptionTitle = styled.h2`
    font-style: normal;
    font-weight: bold;
    margin-bottom: 3rem;
    font-size: 72px;
    line-height: 113.5%;
    color: #fff;

    @media only screen and (max-width: 900px) {
        font-size: 36px;
        line-height: 119%;
        margin-bottom: 2rem;
    }
`;
const DescriptionText = styled.p`
    font-style: normal;
    font-weight: 600;
    margin-bottom: 7.8rem;
    width: 830px;
    font-size: 18px;
    line-height: 126.5%;
    color: #fff;

    @media only screen and (max-width: 900px) {
        font-size: 16px;
        line-height: 125%;
        margin-bottom: 4rem;
        width: 100%;
    }
`;
const DescriptionButton = styled.a`
    width: 319px;
    height: 43px;
    margin-top: 5rem;
    background: #ffffff;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 125%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;

    color: #000000;
    @media only screen and (min-width: 900px) {
        padding: 15px 30px;

        width: 250px;
        background: transparent;
        height: 41px;

        border: 2px solid #ffffff;
        box-sizing: border-box;
        color: #fff;
    }
`;

const Description = ({ forwardRef }) => {
    return (
        <Section>
            <DescriptionContainer ref={forwardRef}>
                <DescriptionTitle>KRÓTKIE COPY ZACHĘCAJĄCE DO WZIĘCIA UDZIAŁU</DescriptionTitle>
                <DescriptionText>
                    ŚLEDŹ NASZE MEDIA SPOŁECZNOŚCIOWE I BĄDŹ NA BIEŻĄCO - POWSTAJĄ APLIKACJE NA
                    RÓŻNE PLATFORMY, Z KTÓRYMI BĘDZIESZ MÓGŁ REALIZOWAĆ PROJEKTY.
                </DescriptionText>
                <SocialMedia />
                <DescriptionButton>dowiedz się wiecej</DescriptionButton>
            </DescriptionContainer>
        </Section>
    );
};
export default Description;
