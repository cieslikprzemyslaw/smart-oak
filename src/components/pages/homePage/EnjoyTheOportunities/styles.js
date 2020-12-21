import styled from 'styled-components';

const FirstSection = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100vh;
    white-space: pre;
    text-align: right;
    color: #7e7e7e;
    font-size: 52px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    flex-wrap: wrap;
`;

const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const InfoSectionContainer = styled.div`
    margin: 60px;
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const InfoSectionHeader = styled.h4`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    line-height: 125.5%;
    text-align: left;
`;

const InfoSectionContent = styled.h4`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 152%;
    text-align: left;
`;

const Title1 = styled.h2`
    text-align: left;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 52px;
    color: #7e7e7e;
    width: 55%;
    @media (max-width: 1224px) {
        font-size: 40px;
        width: unset;
    }
`;

const Title2 = styled.h2`
    text-align: left;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 52px;
    color: #000;
    width: 55%;
    @media (max-width: 1224px) {
        font-size: 40px;
        width: 100%;
        text-align: center;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: ${(props) => (props.imageOnLeft ? 'row' : 'row-reverse')};
    min-height: 100vh;
    @media (max-width: 1224px) {
        flex-direction: column;
        width: 100%;
        text-align: center;
    }
`;

const ImageWithAnimation = styled.img`
    min-height: 100vh;
    min-width: 85vw;
    max-width: ${(props) => props.maxWidth || '75vw'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 1224px) {
        min-height: unset;
        transform: translate(0%) !important;
        background-size: auto;
        max-width: 100vw;
        width: 100vw;
        height: auto !important;
        top: unset;
        left: unset;
        position: absolute;
        bottom: 0;
        right: 0;
        @media (min-width: 800px) {
            bottom: -350px;
        }
    }
`;

const Text = styled.div`
    width: 50%;
    background-color: #ffffff;
    z-index: 101;

    @media (max-width: 1224px) {
        width: 100%;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    width: 50%;
    max-width: 50vw;
    z-index: 100;
    overflow: hidden;
    display: inline-block;
    @media (max-width: 1224px) {
        max-width: 100vw;
        width: 100%;
        height: 100vh;
        left: 0 !important;
    }
`;

export {
    FirstSection,
    InfoSection,
    InfoSectionContainer,
    InfoSectionHeader,
    InfoSectionContent,
    Title1,
    Title2,
    Container,
    ImageWithAnimation,
    Text,
    ImageContainer,
};
