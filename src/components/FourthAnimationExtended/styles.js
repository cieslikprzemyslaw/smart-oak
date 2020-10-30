import styled from 'styled-components';
import ImageSrc from '../../assets/images/pexels-cottonbro.png';

const FourthAnimationExtended = styled.div`
    background-image: url(${ImageSrc});
    background-repeat: no-repeat;
    background-position: bottom;
    background-attachment: fixed;
`;

const StyledImg = styled.img`
    width: 100%;
`;

const AnimationContainer = styled.div`
    position: relative;
`;

const AnimationContent = styled.div`
    position: absolute;
    width: 75%;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    color: white;
`;

const AnimationContentParagraph = styled.p`
    margin-top: 40px;
    font-size: 24px;
    line-height: 1.5;
`;

const AnimationContentHeader = styled.h2`
    font-size: 44px;
    line-height: 1.2;
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
`;

const AfterAnimationContentHeader = styled.h2`
    font-size: 44px;
    line-height: 1.2;
`;

export {
    StyledImg,
    AnimationContainer,
    AnimationContent,
    AnimationContentHeader,
    AnimationContentParagraph,
    AfterAnimationContainer,
    AfterAnimationContentParagraph,
    AfterAnimationContentHeader,
    FourthAnimationExtended,
};
