import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import ImageSrc from '../../assets/images/some-dude-in-cafe.png';
import { useIntl } from 'gatsby-plugin-intl';
import CSSRulePlugin from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);


const DummySection = styled.section`

    display: block;
    background: black;
    height: 700px;

`;

const Wrapper = styled.div`
    height: 2000px;

    .ImageAndTextContainer:before{
        content: '';
        display: block;
        width: 550px;
        height: 100%;
        background: white;
    }

         
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

    height: 700px;

    
    
    .pin-spacer{
       
        margin: 0 auto !important;
    }

  
    margin: 0 auto;

    background: url(${ImageSrc}) no-repeat;
    background-size: 100%;
 
    background-position: 0 0;
   
    width: 100%
    
`;




const Text = styled.p`

    font-size: 20px;
    color: white;
    

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
    
    const ImageAndTextRef = useRef(null);
    const TextRef = useRef(null);

    

    useEffect(() => {
       
      
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ImageAndTextRef.current,
                start: 'top',
                end:  '+=400',
                scrub: 0.5,
                 
                pin: true,
                
            },
        });
        const beforeRef = CSSRulePlugin.getRule(".ImageAndTextContainer:before");  
   
       
        tl.to(beforeRef, { duration: 1, cssRule: { backgroundColor: "#F43C09" }}); 
 
        console.log('rule: '+ beforeRef );
        tl.to( beforeRef,  {
          cssRule: { width: 0 },
          delay: 1
        });
        
        tl.fromTo(
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