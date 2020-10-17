import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BackgroundImage from '../../assets/images/some-dude-in-cafe.png';

gsap.registerPlugin(ScrollTrigger)

const DummySection = styled.section`

    display: block;
    background: black;
    height: 700px;

`;

const Section = styled.section`
    height: 1000px;
         
`;

const TextContainer = styled.div`
    
    background: url(${BackgroundImage}) no-repeat top;
    height: 100%;
    background-size: contain;
     
    margin: auto;
`;

const Heading = styled.h2`
    display: flex;
    flex-direction: column;
    color: black;
     
    width: 80%;
    margin: 100px auto;
    
    font-style: normal;
    font-weight: bold;
    font-size: 52px;
    line-height: 136%;

    span{
        color: gray;
    }
`;

const SecondAnimation = () => {

    
    const TextContainerRef = useRef(null);;

       useEffect(() => {
        
        gsap.fromTo(TextContainerRef.current, 
        {width: '80%'},
        {width: '100%',  duration: 1, scrollTrigger:{
                trigger: TextContainerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                scrub: 1,
                markers: {startColor: "green", endColor: "red", fontSize: "12px"}
           
            }
        })

    }, []);

    return(

        <Section>
        <DummySection></DummySection>
        <Heading><span>Podbijaj świat</span>Projektami.</Heading>
        <TextContainer ref={TextContainerRef}>
        
        </TextContainer>
        <DummySection></DummySection>
        </Section>
    );

}

export default SecondAnimation;