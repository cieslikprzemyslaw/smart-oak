import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';

import { useIntl } from 'gatsby-plugin-intl';

import { Wrapper, Header, ImageAndTextContainer, Text, TextWrapper, Paragraph } from './styles';
import { conquerTheWorldAnimation } from './useAnimate';

const SecondAnimation = () => {
    const intl = useIntl();

    const WhiteBoxRight = useRef(null);
    const WhiteBoxLeft = useRef(null);
    const TextRef = useRef(null);
    const animationWrapper = useRef(null);
    const [height, setHeight] = useState(0);

    const checkSize = () => {
            return setHeight(TextRef.current.clientHeight);
        };

    useEffect(() => {
        conquerTheWorldAnimation(animationWrapper, WhiteBoxLeft, WhiteBoxRight, TextRef);
        setHeight(TextRef.current.clientHeight);
    }, []);

    useLayoutEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.addEventListener('resize', checkSize);
        };
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
                            <Paragraph>
                                {intl.formatMessage({
                                    id: `projectSection.block1`,
                                })}
                            </Paragraph>
                            <Paragraph>
                                {intl.formatMessage({
                                    id: `projectSection.block2`,
                                })}
                            </Paragraph>
                            <Paragraph>
                                {intl.formatMessage({
                                    id: `projectSection.block3`,
                                })}
                            </Paragraph>
                        </Text>
                    </TextWrapper>

                    <div className="WhiteBox" ref={WhiteBoxRight}></div>
                </ImageAndTextContainer>
            </div>
        </Wrapper>
    );
};

export default SecondAnimation;
