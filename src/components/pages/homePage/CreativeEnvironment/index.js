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
} from './styles.js';

const FourthAnimation = () => {
    const imgRef = useRef(null);
    const intl = useIntl();

    useEffect(() => {
        scaleImgOnScroll(imgRef.current);
    }, []);

    return (
        <>
            <FourthAnimationExtended>
                <AnimationContainer>
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
