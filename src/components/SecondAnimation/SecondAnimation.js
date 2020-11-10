import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ImageSrc from '../../assets/images/pexels-cottonbro-3584926.png';
import { useIntl } from 'gatsby-plugin-intl';

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
    padding-bottom: 100px;
    position: relative;
    z-index: 3;
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

    span {
        color: gray;
    }
`;

const ImageAndTextContainer = styled.div`
    display: flex;

    height: 960px;

    .WhiteBox {
        display: block;
        height: 100%;
        width: 35vw;
        background: #f9f7f6;
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

    p {
        width: 60%;
        margin: 28px 0;
    }

    & p:first-of-type {
        font-weight: 600;
        font-size: 23px;
        line-height: 152%;
        color: #f9f9f9;
    }
`;

const SecondAnimation = () => {
    const intl = useIntl();
    const WhiteBoxRight = useRef(null);
    const WhiteBoxLeft = useRef(null);

    const TextRef = useRef(null);
    const animationWrapper = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: animationWrapper.current,
                start: '-20%',
                end: '+=400',
                scrub: 0.5,

                pin: false,
            },
        });

        tl.to(WhiteBoxLeft.current, { xPercent: -100 }, 0)
            .to(WhiteBoxRight.current, { xPercent: +100 }, 0)

            .fromTo(TextRef.current, { opacity: 0, ease: 'none' }, { opacity: 1, ease: 'none' });
    }, []);

    return (
        <Wrapper>
            <div ref={animationWrapper}>
                <Heading>
                    <span>Podbijaj świat</span>Projektami.
                </Heading>
                <ImageAndTextContainer className="ImageAndTextContainer">
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
            </div>
        </Wrapper>
    );
};

export default SecondAnimation;
