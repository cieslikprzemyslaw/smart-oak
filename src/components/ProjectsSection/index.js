import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import projectsImg from '../../assets/images/ProjectsSection-1.jpeg';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Container = styled.div`
    margin: 4rem 7rem;
    @media screen and (max-width: 900px) {
        margin: 4rem 0rem;
        width: 100%;
    }
`;

const TitleContainer = styled.div`
    @media screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

const Title1 = styled.h3`
    font-style: normal;
    font-weight: normal;
    font-size: 5.2rem;
    line-height: 119%;
    color: #0e0e0e;
`;

const Title2 = styled.h3`
    font-weight: bold;
    font-size: 6.4rem;
    line-height: 119%;
    color: #0e0e0e;
    width: 396px;
    margin-left: 10rem;
    margin-bottom: 4rem;
    border-bottom: 5px solid #e2bc3f;
    @media screen and (max-width: 900px) {
        text-align: center;
        margin-left: 0;
    }
`;

const StyledImg = styled.img`
    width: 1000px;
    height: 654px;
    margin: 0 auto;
    display: block;

    object-fit: none;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const ProjectsSection = () => {
    const textRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 80%',
                end: '+=500 80%',
                scrub: true,
                // markers: true,
            },
        });
        tl.from(textRef.current, { opacity: 0, y: '+=50' }).from(imgRef.current, {
            opacity: 0,
            y: '+=50',
        });
    }, []);
    return (
        <Container>
            <TitleContainer ref={textRef}>
                <Title1>Podbijaj świat!</Title1>
                <Title2>Projektami</Title2>
            </TitleContainer>
            <StyledImg src={projectsImg} ref={imgRef} />
        </Container>
    );
};

export default ProjectsSection;
