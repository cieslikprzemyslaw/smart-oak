import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import BackgroundImage from '../../assets/images/some-dude-in-cafe.png';

 

const DummySection = styled.section`

    display: block;
    background: black;
    height: 700px;

`;

const Section = styled.section`
    height: 2000px;
         
`;

const TextContainer = styled.div`
    
    background: url(${BackgroundImage}) no-repeat top;
    height: 100%;
    background-size: contain;
    width: 80%;
    margin: 0 auto;
    
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
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: TextContainerRef.current,
                start: '-5% top',
                end: "+=500",
                scrub: 0.3,
                pin: true,
                markers: {startColor: "green", endColor: "red", fontSize: "12px"}
            },
        });

        
      

        tl.to(
            TextContainerRef.current,{  scale: 1.3,
                ease: 'none',
                duration: 0.2,
            }
        )
       
          
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