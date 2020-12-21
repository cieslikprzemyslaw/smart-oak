import slideAnimation from './useAnimate';
import PropTypes from 'prop-types';
import { Container, ImageWithAnimation, Text, ImageContainer } from './styles';
import React, { useRef, useEffect } from 'react';

const Section = ({ imageOnLeft, src, children, shiftValue, maxWidth }) => {
    const imgRef = useRef(null);

    useEffect(() => {
        slideAnimation(shiftValue, imgRef);
    }, [imgRef, shiftValue]);

    return (
        <Container imageOnLeft={imageOnLeft}>
            <Text>{children}</Text>
            <ImageContainer>
                <ImageWithAnimation src={src} ref={imgRef} maxWidth={maxWidth} />
            </ImageContainer>
        </Container>
    );
};

Section.propTypes = {
    imageOnLeft: PropTypes.bool,
    shiftValue: PropTypes.number,
};

export default Section;
