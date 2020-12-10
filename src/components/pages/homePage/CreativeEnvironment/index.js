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
    TitleWrapper,
    Title1,
    Title2,
} from './styles.js';

const FourthAnimation = () => {
    const imgRef = useRef(null);
    const intl = useIntl();

    useEffect(() => {
        scaleImgOnScroll(imgRef.current);
    }, []);

    return (
        <>
            <TitleWrapper>
                <Title1>
                    {intl.formatMessage({
                        id: `fourthAnimationTitle.title1`,
                    })}
                </Title1>
                <Title2>
                    {intl.formatMessage({
                        id: `fourthAnimationTitle.title2`,
                    })}
                </Title2>
            </TitleWrapper>
            <FourthAnimationExtended>
                <AnimationContainer>
                    <AnimationImg src={ImageSrc} ref={imgRef} />
                    <AnimationContent>
                        <AnimationContentHeader>
                            <h2>
                                {intl.formatMessage({
                                    id: `fourthAnimationExtendedSection.title1`,
                                })}
                            </h2>
                        </AnimationContentHeader>
                        <AnimationContentParagraph>
                            <p>
                                {intl.formatMessage({
                                    id: `fourthAnimationExtendedSection.block1`,
                                })}
                            </p>
                        </AnimationContentParagraph>
                    </AnimationContent>
                </AnimationContainer>
                <Wrapper>
                    <FourthAnimationExtended>
                        <AfterAnimationContainer>
                            <AfterAnimationContentHeader>
                                <h2>
                                    {intl.formatMessage({
                                        id: `fourthAnimationExtendedSection.title2`,
                                    })}
                                </h2>
                            </AfterAnimationContentHeader>
                            <AfterAnimationContentParagraph>
                                <p>
                                    {intl.formatMessage({
                                        id: `fourthAnimationExtendedSection.block2`,
                                    })}
                                </p>
                            </AfterAnimationContentParagraph>
                        </AfterAnimationContainer>
                    </FourthAnimationExtended>
                </Wrapper>
            </FourthAnimationExtended>
        </>
    );
};

export default FourthAnimation;
