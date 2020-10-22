import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import ImageSrc from '../../assets/images/some-dude-in-cafe.png';
import { useIntl } from 'gatsby-plugin-intl';
 
gsap.registerPlugin(ScrollTrigger);
 


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
    display: flex;

    height: 960px;

    .WhiteBox{
        display: block;
        height: 100%;
        width: 400px;
        background: #F9F7F6;
    }
    
    
    .pin-spacer{
       
        margin: 0 auto !important;
    }

  
    margin: 0 auto;

    background: url(${ImageSrc}) no-repeat;
    background-size: 100%;
 
    background-position: 0 0;
   
 
     
  
`;




const Text = styled.p`

    padding-top: 50px;
    font-size: 20px;
    color: white;
    
    
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 152%;

    p{
        width: 60%;
        margin: 28px 0;
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
    const WhiteBoxRight = useRef(null);
    const WhiteBoxLeft = useRef(null);
    const ImageAndTextRef = useRef(null);
    const TextRef = useRef(null);

    

    useEffect(() => {
       
      
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ImageAndTextRef.current,
                start: 'top',
                end:  '+=400',
                scrub: 0.5,
                toggleActions: 'play restart none none',
                pin: true,
                
            },
        });
        
        tl.to(WhiteBoxLeft.current, {xPercent: -100}, 0)
        .to(WhiteBoxRight.current, {xPercent: +100}, 0)
        
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
        <ImageAndTextContainer ref={ImageAndTextRef} className="ImageAndTextContainer"> 
        <div className="WhiteBox" ref={WhiteBoxLeft}></div>
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
        <div className="WhiteBox" ref={WhiteBoxRight}></div>
        </ImageAndTextContainer> 
        <DummySection></DummySection>
        </Wrapper>
    );

}

export default SecondAnimation;