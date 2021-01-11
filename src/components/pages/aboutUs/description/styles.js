import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5vh;

    @media (min-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
    }
`;
const WrapperWithParagraph = styled.section`
    width: 100%;

    @media (min-width: 1024px) {
        width: 48%;
    }
`;
const Wrapper = styled.section`
    width: 100%;

    @media (min-width: 1024px) {
        width: 48%;
        margin-top: 5vh;
    }
`;

const Title = styled.h2`
    margin: 5vh 0 5vh 5vw;
    display: block;
    font-size: 20px;

    @media (min-width: 640px) {
        font-size: 24px;
    }

    @media (min-width: 800px) {
        font-size: 28px;
    }

    @media (min-width: 1024px) {
        max-width: 100%;
        font-size: 36px;
    }

    @media (min-width: 1440px) {
        font-size: 38px;
    }  
`;
const Paragraph = styled.p`
    margin: 0 5vw;
    font-size: 16px;

    @media (min-width: 1024px) {
        max-width: 100%;
        font-size: 20px;
    }
`;

export { Title, Paragraph, Section, WrapperWithParagraph, Wrapper };
