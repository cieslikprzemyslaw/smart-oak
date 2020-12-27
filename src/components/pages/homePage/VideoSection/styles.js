import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    height: calc(100vh - 4.5rem);
    z-index: 3;
`;
const TextContainer = styled.div`
    position: relative;
    height: 100%;
    text-align: justify;
    margin: 0 15px 0 15px;
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
    z-index: 4;
    will-change: opacity, scale;
    width: 50rem;
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
    height: 70vh;
    position: relative;
    z-index: 4;

    @media only screen and (max-width: 1100px) {
        position: absolute;
        left: 70px;
        top: 85px;
        width: 100%;
    }
`;

const DescriptionContainer = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    left: 8%;
    top: 15%;
    font-family: Open Sans, sans-serif;
    > * {
        will-change: opacity, scale, transform;
    }
    @media only screen and (max-width: 1024px) {
        left: 0%;
        top: 0%;
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
    margin-bottom: 50px;
    font-size: 48px;
    line-height: 111.5%;
    color: #fff;
    width: 90%;
    text-align: justify;

    @media only screen and (max-width: 1024px) {
        font-size: 36px;
        text-align: left;
    }

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

    @media (min-height: 1300px) {
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

    @media (min-height: 1300px) {
        font-size: 105px;
        margin-bottom: 50px;
    }

    @media only screen and (max-width: 1024px) {
        font-size: 52px;
    }

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

    @media (min-height: 1300px) {
        font-size: 105px;
        margin-bottom: 50px;
    }

    @media only screen and (max-width: 1024px) {
        font-size: 52px;
    }

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
    @media (min-height: 1300px) {
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

    @media only screen and (max-width: 1024px) {
        width: 100%;
    }

    @media only screen and (max-width: 900px) {
        font-size: 16px;
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
        text-align: left;
    }
    @media (min-height: 1300px) {
        font-size: 48px;
        line-height: 160%;
        width: 80%;
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
