import styled from 'styled-components';
import ImageSrc from '../../assets/images/pexels-cottonbro.png';

const FourthAnimationExtended = styled.div`
    background-image: url(${ImageSrc});
    background-repeat: no-repeat;
    background-position: bottom;
    background-attachment: fixed;
`;

const AnimationImg = styled.img`
    width: 100%;
`;

const AnimationContainer = styled.div``;

const AnimationContent = styled.div`
    position: fixed;
    width: 75%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 2;
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
        font-size: 22px;
    }
    @media screen and (max-width: 800px) {
        font-size: 21px;
    }
    @media screen and (max-width: 600px) {
        font-size: 20px;
    }
`;

const AfterAnimationContentHeader = styled.h2`
    font-size: 37px;
    line-height: 1.2;

    @media screen and (max-width: 900px) {
        font-size: 33px;
    }
    @media screen and (max-width: 800px) {
        font-size: 27px;
    }
    @media screen and (max-width: 600px) {
        font-size: 22px;
    }
`;

const Wrapper = styled.div`
    background-color: white;
    position: relative;
    z-index: 3;
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