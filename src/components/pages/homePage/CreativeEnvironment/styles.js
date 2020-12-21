import styled from 'styled-components';

import ImageSrc from '../../../../assets/images/pexels-cottonbro.png';

const FourthAnimationExtended = styled.div`
    background-image: url(${ImageSrc});
    background-repeat: no-repeat;
    background-position: bottom;
    background-attachment: fixed;
`;

const AnimationImg = styled.img`
    width: 100%;
    @media (max-width: 1224px) {
        transform: scale(1) !important;
        width: auto;
        height: 100%;
        max-width: unset;
    }
`;

const AnimationContainer = styled.div`
    position: relative;
`;

const AnimationContent = styled.div`
    position: fixed;
    width: 75%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 2;
    @media (max-width: 1224px) {
        position: absolute;
        top: 0;
        transform: translate(0, 0);
        left: 0;
        margin: 120px 15px 15px 15px;
        width: auto;
    }
`;

const AnimationContentParagraph = styled.p`
    margin-top: 40px;
    font-size: 24px;
    line-height: 1.5;

    @media screen and (max-width: 950px) {
        font-size: 22px;
    }
    @media screen and (max-width: 800px) {
        font-size: 21px;
    }
    @media screen and (max-width: 600px) {
        font-size: 20px;
    }

    @media (max-width: 1224px) {
        position: absolute;
    }
`;

const AnimationContentHeader = styled.h2`
    font-size: 44px;
    line-height: 1.2;

    @media screen and (max-width: 950px) {
        font-size: 33px;
    }
    @media screen and (max-width: 800px) {
        font-size: 27px;
    }
    @media screen and (max-width: 600px) {
        font-size: 22px;
    }
`;

const AfterAnimationContainer = styled.div`
    width: 75%;
    padding: 250px 0 100px 0;
    margin: 0 auto;
    text-align: center;
`;

const AfterAnimationContentParagraph = styled.p`
    margin-top: 40px;
    font-size: 24px;
    line-height: 1.5;

    @media screen and (max-width: 900px) {
        font-size: 18px;
    }
    @media screen and (max-width: 800px) {
        font-size: 17px;
    }
    @media screen and (max-width: 600px) {
        text-align: left;
        font-size: 16px;
    }
`;

const AfterAnimationContentHeader = styled.h2`
    font-size: 37px;
    line-height: 1.2;

    @media screen and (max-width: 900px) {
        font-size: 28px;
    }
    @media screen and (max-width: 800px) {
        font-size: 22px;
    }
    @media screen and (max-width: 600px) {
        text-align: left;
        font-size: 16px;
    }
`;

const Wrapper = styled.div`
    background-color: white;
    position: relative;
    z-index: 3;
`;

const TitleWrapper = styled.div`
    font-family: Open Sans;
    font-weight: bold;
    font-size: 52px;
    margin-top: 100px;
    position: relative;
    z-index: 3;
`;

const Title1 = styled.h2`
    font-size: 52px;
    margin: 10vh 0 0 10vw;
    color: #7e7e7e;
`;

const Title2 = styled.h2`
    font-size: 52px;
    margin: 0 0 10vh 10vw;
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
    TitleWrapper,
    Title1,
    Title2,
};
