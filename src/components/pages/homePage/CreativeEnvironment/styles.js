import styled from 'styled-components';

import ImageSrc from '../../../../assets/images/pexels-cottonbro.png';

const FourthAnimationExtended = styled.div`
    background-image: url(${ImageSrc});
    background-repeat: no-repeat;
    background-position: bottom;
    background-attachment: fixed;

    @media (max-width: 800px) {
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
    }
`;

const AnimationImg = styled.img`
    min-width: 100%;
    max-height: 150vh;
    @media (max-width: 1024px) {
        min-height: 100vh;
    }
    @media (max-width: 550px) {
        min-height: 120vh;
    }
    @media (max-width: 450px) {
        min-height: 130vh;
    }
`;

const AnimationContainer = styled.div`
    position: relative;
    max-height: 125vh;
    @media (max-width: 1224px) {
        text-align: justify;
    }
`;

const AnimationContent = styled.div`
    position: fixed;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 2;
    @media (max-width: 1023px) {
        width: 70%;
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @media (max-width: 700px) {
        width: 85%;
    }
    @media (max-width: 500px) {
        width: 95%;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const AnimationContentParagraph = styled.div`
    margin-top: 40px;
    font-size: 26px;
    line-height: 1.8;
    font-weight: 400;

    @media (max-width: 1024px) {
        width: 100%;
        text-align: justify;
        margin: 14px auto;
        font-size: 24px;
    }
    @media (max-width: 800px) {
        font-size: 20px;
    }
    @media (max-width: 500px) {
        font-size: 16px;
    }
    @media (max-width: 360px) {
        font-size: 16px;
    }

    @media (max-width: 1224px) {
        position: absolute;
    }
    @media (min-height: 1300px) {
        font-size: 44px;
    }
`;

const AnimationContentHeader = styled.h2`
    font-size: 37px;
    line-height: 1.5;
    font-weight: 600;

    @media (max-width: 1024px) {
        width: 100%;
        font-size: 36px;
    }
    @media (max-width: 800px) {
        font-size: 28px;
    }
    @media (max-width: 500px) {
        font-size: 24px;
    }
    @media (max-width: 360px) {
        font-size: 20px;
    }
    @media (min-height: 1300px) {
        font-size: 62px;
    }
`;

const AfterAnimationContainer = styled.div`
    width: 70%;
    padding: 150px 0 150px 0;
    margin: 0 auto;
    text-align: center;
    @media only screen and (max-width: 1440px) {
        padding: 100px 0 100px 0;
    }

    @media only screen and (max-width: 1024px) {
        margin: 50px auto 0 auto;
        width: 80%;
    }
    @media only screen and (max-width: 800px) {
        padding: 50px 0;
    }

    @media only screen and (max-width: 500px) {
        width: 100vw;
    }

    @media (min-height: 1300px) {
        width: 70%;
    }
`;

const AfterAnimationContentParagraph = styled.p`
    margin-top: 40px;
    font-size: 24px;
    line-height: 1.5;
    font-weight: 400;

    @media (max-width: 1024px) {
        width: 100%;
        margin: 14px auto;
        font-size: 24px;
    }
    @media (max-width: 800px) {
        font-size: 20px;
    }
    @media (max-width: 500px) {
        margin-left: 14px;
        width: 80%;
        font-size: 16px;
    }
    @media (max-width: 360px) {
        font-size: 16px;
    }
`;

const AfterAnimationContentHeader = styled.h2`
    font-size: 37px;
    line-height: 1.5;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 36px;
    }
    @media (max-width: 800px) {
        font-size: 28px;
    }
    @media (max-width: 500px) {
        width: 90%;
        font-size: 24px;
    }
    @media (max-width: 360px) {
        font-size: 20px;
    }
    @media (min-height: 1300px) {
        font-size: 62px;
    }
`;

const Wrapper = styled.div`
    background-color: white;
    position: relative;
    z-index: 3;
    @media (max-width: 1024px) {
        width: 70%;
        margin: 0 auto;
    }
    @media (max-width: 800px) {
        width: 90%;
    }
    @media (max-width: 500px) {
        text-align: justify;
    }
`;

export {
    AnimationImg,
    AnimationContainer,
    AnimationContent,
    AnimationContentHeader,
    AnimationContentParagraph,
    AfterAnimationContainer,
    AfterAnimationContentParagraph,
    AfterAnimationContentHeader,
    FourthAnimationExtended,
    Wrapper,
};
