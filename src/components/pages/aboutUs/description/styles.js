import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;   
    margin-bottom: 5vh;

    @media(min-width: 1024px){
        display: flex;
        flex-wrap: wrap;
    }
`;
const WrapperWithParagraph = styled.section`
    width: 100%; 

    @media(min-width: 1024px){
        width: 48%;
    }
`;
const Wrapper = styled.section`
    width: 100%; 

    @media(min-width: 1024px){
        width: 48%; 
        margin-top: 5vh;
    }
`;

const Title = styled.h2`
    margin: 5vh 0 5vh 5vw;
    display: block;

    @media(min-width: 1024px){
       max-width: 100%;
    }
`;
const Paragraph = styled.p`
    margin: 0 5vw;

    @media(min-width: 1024px){
        max-width: 100%;
    }
`;



export { Title, Paragraph, Section, WrapperWithParagraph, Wrapper }