import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import ImageSrc from '../../assets/images/some-dude-in-cafe.png';

 

const DummySection = styled.section`

    display: block;
    background: black;
    height: 700px;

`;

const Wrapper = styled.div`
    height: 2000px;
         
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

const Image = styled.img`
  margin: 0 auto;
  width: 80%;
  display: block;
  object-fit: none;

    &.fixedScrolling {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
      
    }
`;



const Text = styled.p`

    font-size: 20px;
    opacity: 0;
`;
 

const SecondAnimation = () => {

    
    const ImageRef = useRef(null);
    const TextRef = useRef(null);
  
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ImageRef.current,
                start: '-10% top',
                end:  '+=600',
                scrub: 0.3,
                toggleClass: 'fixedScrolling',
                
                markers: {startColor: "green", endColor: "red", fontSize: "12px"}
            },
        });

       
        tl.fromTo(
            ImageRef.current,
            {width: '80%',ease: 'none'},
            {width: '100%',ease: 'none'}
        )
        .fromTo(
            TextRef.current,
            { opacity: 0, ease: 'none' },
            { opacity: 1, ease: 'none' },
        )
       
          
    }, []);

    return(

        <Wrapper>
        <DummySection></DummySection>
       
        <Heading><span>Podbijaj świat</span>Projektami.</Heading>
        <Image ref={ImageRef} src={ImageSrc}></Image>
        <Text ref={TextRef}>Smart Oak to innowacyjna platforma dla społeczności projektowych, która ułatwi poszerzanie kompetencji oraz da możliwość brania udziału w projektach społecznych, naukowych i komercyjnych. Mnogość narzędzi pozwoli na sprawną komunikację i zarządzanie. Na platformie dostępny będzie tasker, mapy myśli, dyski, ankiety, komunikator tekstowy, głosowy i videorozmowy. A to dopiero początek!</Text>
     
        <DummySection></DummySection>
        </Wrapper>
    );

}

export default SecondAnimation;