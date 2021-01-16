import React, { useRef, useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import ImageSrc from '../../../../assets/images/forest-background-cropped.png';
import { scaleImgOnScroll } from './useAnimate';
import {
    AnimationContentParagraph,
    AnimationContainer,
    AnimationImg,
    AnimationContent,
    AnimationContentHeader,
    AfterAnimationContainer,
    AfterAnimationContentParagraph,
    AfterAnimationContentHeader,
    FourthAnimationExtended,
    Wrapper,
    WhiteBoxL,
    WhiteBoxR,
} from './styles.js';

const FourthAnimation = () => {
    const imgRef = useRef(null);
    const intl = useIntl();

    const WhiteBoxRight = useRef(null);
    const WhiteBoxLeft = useRef(null);
    const animationWrapper = useRef(null);

    useEffect(() => {
        scaleImgOnScroll(animationWrapper, WhiteBoxLeft, WhiteBoxRight);
    }, []);

    return (
        <>
            <FourthAnimationExtended>
                <AnimationContainer ref={animationWrapper}>
                    <WhiteBoxL ref={WhiteBoxLeft}></WhiteBoxL>
                    <AnimationImg src={ImageSrc} ref={imgRef} />
                    <AnimationContent>
                        <AnimationContentHeader>
                            {intl.formatMessage({
                                id: `fourthAnimationExtendedSection.title1`,
                            })}
                        </AnimationContentHeader>
                        <AnimationContentParagraph>
                            {intl.formatMessage({
                                id: `fourthAnimationExtendedSection.block1`,
                            })}
                        </AnimationContentParagraph>
                    </AnimationContent>
                    <WhiteBoxR ref={WhiteBoxRight}></WhiteBoxR>
                </AnimationContainer>
                <Wrapper>
                    <FourthAnimationExtended>
                        <AfterAnimationContainer>
                            <AfterAnimationContentHeader>
                                {intl.formatMessage({
                                    id: `fourthAnimationExtendedSection.title2`,
                                })}
                            </AfterAnimationContentHeader>
                            <AfterAnimationContentParagraph>
                                {intl.formatMessage({
                                    id: `fourthAnimationExtendedSection.block2`,
                                })}
                            </AfterAnimationContentParagraph>
                        </AfterAnimationContainer>
                    </FourthAnimationExtended>
                </Wrapper>
            </FourthAnimationExtended>
        </>
    );
};

export default FourthAnimation;
