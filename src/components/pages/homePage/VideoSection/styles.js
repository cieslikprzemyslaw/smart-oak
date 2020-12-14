import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    height: calc(100vh - 4.5rem);
    z-index: 3;
`;
const TextContainer = styled.div`
    position: relative;
    height: 100%;
`;

const VideoWrapper = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 3;
`;

const StyledLogo = styled.img`
    z-index: 3;
    will-change: opacity, scale;
    width: 90rem;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 1100px) {
        width: 70rem;
    }
    @media screen and (max-width: 600px) {
        width: 90%;
    }
`;

const Section = styled.div`
    object-fit: fill;
    height: 100vh;
    position: relative;
    z-index: 3;

    @media only screen and (min-width: 900px) {
        position: absolute;
        left: 70px;
        top: 85px;
        width: 100%;
    }
`;

const DescriptionContainer = styled.div`
    position: absolute;
    width: 980px;
    height: 180px;
    left: 100px;
    top: 128px;
    font-family: Open Sans, sans-serif;
    > * {
        will-change: opacity, scale, transform;
    }
    @media only screen and (max-width: 1250px) {
        width: 80vw;
    }
    @media only screen and (max-width: 900px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    @media only screen and (max-width: 550px) {
        width: 90vw;
    }
`;
const DescriptionTitle = styled.h2`
    font-style: normal;
    font-weight: 600;
    margin-bottom: 3rem;
    font-size: 48px;
    line-height: 111.5%;
    color: #fff;

    @media only screen and (max-width: 900px) {
        font-size: 36px;
        line-height: 119%;
        margin-bottom: 2rem;
    }
    @media only screen and (max-width: 500px) {
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
    }
`;
const Description = styled.p`
    font-style: normal;
    font-weight: 400;
    margin-bottom: 7.8rem;
    width: 830px;
    font-size: 20px;
    line-height: 32.6px;
    letter-spacing: 0.01em;
    color: #fff;
    @media only screen and (max-width: 900px) {
        font-size: 16px;
        line-height: 125%;
        margin-bottom: 4rem;
        width: 100%;
    }
    @media only screen and (max-width: 500px) {
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
    }
`;

export {
    Container,
    TextContainer,
    VideoWrapper,
    StyledLogo,
    Section,
    DescriptionContainer,
    DescriptionTitle,
    Description,
};
