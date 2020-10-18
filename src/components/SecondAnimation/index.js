import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import ImageSrc from '../../assets/images/some-dude-in-cafe.png';
import { useIntl } from 'gatsby-plugin-intl';
 

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
    margin: 100px auto 0;
    
    font-style: normal;
    font-weight: bold;
    font-size: 52px;
    line-height: 136%;

    span{
        color: gray;
    }
`;

const ImageAndTextContainer = styled.div`

    position: relative;
    
    .pin-spacer{
        width: 100% !important;
        margin: 0 auto !important;
    }

   
    
`;

const Image = styled.img`
   
    display: inline-block !important;
    object-fit: none;
    width: 100%;
    margin: 0 auto !important;
    max-width: none !important;
    transform: scaleX(0.8);
`;



const Text = styled.p`

    font-size: 20px;
    color: white;
    position: absolute;
    left: 130px;
    bottom: 300px;
    width: 800px;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 152%;

    p{ margin: 24px 0;
         
    }
   

    & p:first-of-type{
    font-weight: 600;
    font-size: 23px;
    line-height: 152%;
    color: #F9F9F9;
}
    
`;
 

const SecondAnimation = () => {

    const intl = useIntl();
    const ImageRef = useRef(null);
    const TextRef = useRef(null);
  
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ImageRef.current,
                start: 'top',
                end:  '+=400',
                scrub: 0.5,
                
                pin: true,
                
            },
        });
 
       
        tl.to(ImageRef.current,
            {transform: "scaleX(1)"})
           
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
        <ImageAndTextContainer>
        <Image ref={ImageRef} src={ImageSrc}></Image>
        <Text ref={TextRef}>
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
        </Text>
        </ImageAndTextContainer> 
        <DummySection></DummySection>
        </Wrapper>
    );

}

export default SecondAnimation;