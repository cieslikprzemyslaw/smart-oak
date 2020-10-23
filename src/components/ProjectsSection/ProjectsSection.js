import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Title from './Title';
import { useIntl } from 'gatsby-plugin-intl';
import projectsImg from '../../assets/images/pexels-cottonbro-3584926.png';

const Container = styled.div`
    margin: 8rem 7rem;
    @media screen and (max-width: 900px) {
        margin: 4rem 0;
        width: 100%;
    }
`;

const DescriptionContainer = styled.div`
    position: relative;
    height: 100vh;
    overflow: visible !important;
`;

const Description = styled.div`
    position: absolute;
    left: 10px;
    /* left: 20px; */
    p {
        color: #fff;
        margin-top: 10rem;
        font-style: normal;
        font-weight: bold;
        font-size: 4.5rem;
        @media screen and (max-width: 900px) {
            font-size: 3rem;
        }
        @media screen and (max-width: 600px) {
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
        }
    }
`;

const StyledImg = styled.img`
    width: 90vw;
    height: 85vh;
    margin: 0 auto;
    position: absolute;
    object-fit: cover;
    @media screen and (max-width: 900px) {
        width: 100%;
        object-position: 70% 50%;
    }
`;

const ProjectsSection = () => {
    const imgRef = useRef(null);
    const descRef = useRef(null);
    const containerRef = useRef(null);
    const intl = useIntl();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: '-5% top',
                end: '+=' + window.innerHeight * 3,
                scrub: 0.3,
                pin: true,
            },
        });

        tl.to(imgRef.current, { scale: 1.3, ease: 'none', duration: 0.1 })
            .fromTo(
                descRef.current,
                { yPercent: 90, ease: 'none' },
                { yPercent: -110, ease: 'none' },
            )
            .to(imgRef.current, {
                scale: 1,
                ease: 'none',
                duration: 0.2,
            });
    }, []);

    return (
        <Container>
            <Title
                title1={intl.formatMessage({
                    id: `projectSection.title1`,
                })}
                title2={intl.formatMessage({
                    id: `projectSection.title2`,
                })}
            />
            <DescriptionContainer ref={containerRef}>
                <StyledImg src={projectsImg} ref={imgRef} />
                <Description ref={descRef}>
                    <p>
                        {intl.formatMessage({
                            id: `projectSection.block1`,
                        })}
                    </p>
                    <p>
                        {intl.formatMessage({
                            id: `projectSection.block2`,
                        })}
                    </p>
                    <p>
                        {intl.formatMessage({
                            id: `projectSection.block3`,
                        })}
                    </p>
                </Description>
            </DescriptionContainer>
        </Container>
    );
};

export default ProjectsSection;
