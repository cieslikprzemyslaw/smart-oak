import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';
import { gsap } from 'gsap';
import forestBackground from '../../assets/images/forest-background.png';

const Section = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${forestBackground}) no-repeat 0 0;
    background-size: cover;
    padding-top: 5rem;
`;

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const Description = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 114.5%;
    letter-spacing: 0.03em;
    color: #fff;

    @media screen and (max-width: 900px) {
        font-size: 35px;
    }
    @media screen and (max-width: 600px) {
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 27px;
    }
`;

const DescriptionSection = () => {
    const backgroundRef = useRef(null);
    const sectionRef = useRef(null);
    const intl = useIntl();

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom 60%',
                scrub: 0.5,
            },
        });
        tl.to(backgroundRef.current, {
            y: '-=300px',
        });
    }, []);

    return (
        <Section ref={sectionRef}>
            <Container ref={backgroundRef}>
                <Description>
                    {intl.formatMessage({
                        id: `descriptionSection`,
                    })}
                </Description>
            </Container>
        </Section>
    );
};

export default DescriptionSection;
