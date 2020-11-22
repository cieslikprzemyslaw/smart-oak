import useAnimate from './useAnimate';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useRef } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: ${(props) => (props.imageOnLeft ? 'row' : 'row-reverse')};
    height: 15000;
`;

const ImageWithAnimation = styled.img`
    min-height: 100vh;
    min-width: 85vw;
    max-width: ${(props) => props.maxWidth || '75vw'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

const Text = styled.div`
    width: 50%;
    background-color: #ffffff;
    z-index: 101;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 50%;
    max-width: 50vw;
    z-index: 100;
    overflow: hidden;
    display: inline-block;
`;

const Section = ({ imageOnLeft, src, children, type, maxWidth }) => {
    const imgRef = useRef(null);

    useAnimate(type, imgRef);

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
    type: PropTypes.arrayOf(PropTypes.oneOf(['rightToLeft', 'zoomOut', 'zoomIn'])),
};

export default Section;
