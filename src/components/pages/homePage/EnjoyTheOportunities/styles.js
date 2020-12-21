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
`;

const Title2 = styled.h2`
    text-align: left;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 52px;
    color: #000;
    width: 55%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: ${(props) => (props.imageOnLeft ? 'row' : 'row-reverse')};
    min-height: 100vh;
`;

const ImageWithAnimation = styled.img`
    min-height: 100vh;
    min-width: 85vw;
    max-width: ${(props) => props.maxWidth || '75vw'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
