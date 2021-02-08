import React, { useEffect, useRef, useState } from 'react';

import { useIntl } from 'gatsby-plugin-intl';

import { Wrapper, Header, ImageAndTextContainer, Text, TextWrapper } from './styles';
import { conquerTheWorldAnimation } from './useAnimate';

const SecondAnimation = () => {
    const intl = useIntl();

    const WhiteBoxRight = useRef(null);
    const WhiteBoxLeft = useRef(null);
    const TextRef = useRef(null);
    const animationWrapper = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        conquerTheWorldAnimation(animationWrapper, WhiteBoxLeft, WhiteBoxRight, TextRef);
        setHeight(TextRef?.current?.clientHeight);
        window.addEventListener('resize', () => setHeight(TextRef?.current?.clientHeight));
        const myRef = TextRef?.current ? TextRef.current : null;
        return () => window.removeEventListener('resize', () => setHeight(myRef.clientHeight));
    }, []);

    return (
        <Wrapper>
            <div ref={animationWrapper}>
                <Header>
                    <span>
                        {intl.formatMessage({
                            id: `projectSection.title1`,
                        })}
                    </span>
                    {intl.formatMessage({
                        id: `projectSection.title2`,
                    })}
                </Header>
                <ImageAndTextContainer
                    className="ImageAndTextContainer"
                    style={{ height: `${height + 200}px` }}
                >
                    <div className="WhiteBox" ref={WhiteBoxLeft}></div>
                    <TextWrapper>
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
                    </TextWrapper>

                    <div className="WhiteBox" ref={WhiteBoxRight}></div>
                </ImageAndTextContainer>
            </div>
        </Wrapper>
    );
};

export default SecondAnimation;
