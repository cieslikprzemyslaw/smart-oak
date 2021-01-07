import styled from 'styled-components';

const Container = styled.div`
    overflow: hidden;
    position: relative;
    height: calc(100vh - 4.5rem);
    z-index: 3;
`;
const TextContainer = styled.div`
    position: relative;
    height: 100%;
    text-align: justify;
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

const VideoOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 4;
`;

const StyledLogo = styled.img`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50rem;
    will-change: opacity, scale;
    z-index: 4;

    @media screen and (max-width: 1100px) {
        width: 70rem;
    }
    @media screen and (max-width: 600px) {
        width: 90%;
    }
`;

const Section = styled.div`
    position: relative;
    min-height: 100vh;
    object-fit: fill;
    z-index: 4;

    @media only screen and (max-width: 1100px) {
        position: absolute;
        left: 70px;
        top: 85px;
        width: 100%;
    }

    @media only screen and (max-width: 800px) {
        position: absolute;
        left: 0px;
        top: 50px;
    }

    @media (max-width: 640px) {
        top: 0;
    }
`;

const DescriptionContainer = styled.div`
    position: absolute;
    left: 5%;
    top: 5%;
    width: 80%;
    height: 100%;
    font-family: Open Sans, sans-serif;
    > * {
        will-change: opacity, scale, transform;
    }
    @media only screen and (max-width: 1200px) {
        left: 5%;
        top: 5%;
    }

    @media only screen and (max-width: 550px) {
        width: 90vw;
    }

    @media (max-width: 360px) {
        left: 5%;
        top: 0;
        text-align: justify;
    }
`;
const DescriptionTitle = styled.h2`
    font-style: normal;
    font-weight: 600;
    margin-bottom: 50px;
    font-size: 48px;
    line-height: 111.5%;
    color: #fff;
    width: 90%;
    text-align: left;

    @media only screen and (max-width: 1200px) {
        font-size: 36px;
    }

    @media only screen and (max-width: 800px) {
        font-size: 28px;
        margin-bottom: 2rem;
    }
    @media only screen and (max-width: 500px) {
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: justify;
    }

    @media (max-width: 360px) {
        font-size: 20px;
    }

    @media (min-height: 1500px) {
        font-size: 75px;
        margin-bottom: 50px;
    }
`;

const DescriptionMainTitle = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    letter-spacing: 3px;
    line-height: 111.5%;
    color: #fff;
    width: fit-content;
    text-align: left;

    @media (min-height: 1500px) {
        font-size: 105px;
        margin-bottom: 50px;
    }

    @media only screen and (max-width: 1200px) {
        font-size: 52px;
    }

    @media only screen and (max-width: 800px) {
        font-size: 34px;
    }

    @media only screen and (max-width: 500px) {
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0em;
    }

    @media (max-width: 360px) {
        font-size: 24px;
    }
`;
const DescriptionMainSubtitle = styled.h1`
    font-style: normal;
    font-weight: 600;
    margin-bottom: 3rem;
    font-size: 72px;
    letter-spacing: 3px;
    line-height: 111.5%;
    color: #fff;
    width: fit-content;
    text-align: left;
    margin-bottom: 70px;

    @media (min-height: 1500px) {
        font-size: 105px;
        margin-bottom: 50px;
    }

    @media only screen and (max-width: 1200px) {
        font-size: 52px;
    }

    @media only screen and (max-width: 800px) {
        font-size: 34px;
        margin-bottom: 2rem;
    }
    @media only screen and (max-width: 500px) {
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
    }
    @media (max-width: 360px) {
        font-size: 24px;
    }
    @media (min-height: 1500px) {
        font-size: 105px;
        margin-bottom: 50px;
    }
`;
const Description = styled.p`
    font-style: normal;
    font-weight: 400;
    margin-bottom: 7.8rem;
    width: 70%;
    font-size: 24px;
    line-height: 32.6px;
    letter-spacing: 0.01em;
    color: #fff;
    text-align: left;

    @media only screen and (max-width: 1200px) {
        width: 100%;
    }

    @media only screen and (max-width: 900px) {
        font-size: 20px;
        line-height: 125%;
        margin-bottom: 4rem;
        width: 75%;
    }
    @media only screen and (max-width: 500px) {
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: justify;
    }
    @media (min-height: 1500px) {
        font-size: 48px;
        line-height: 160%;
        width: 80%;
    }

    @media (max-width: 360px) {
        font-size: 16px;
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
    VideoOverlay,
    DescriptionMainTitle,
    DescriptionMainSubtitle,
};
