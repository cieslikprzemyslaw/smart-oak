import styled from 'styled-components';

const Section = styled.section`
    margin-bottom: 5vh;
`;

const Links = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 2.5vh 5vw 2.5vh 5vw;

    @media(min-width: 1024px){
       max-width: 40%;
    }
`;
const Link = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: space-between;
    margin: 2.5vh 5vw 2.5vh 5vw;
`;

const Paragraph = styled.p`
    margin: 0 5vw;

    @media(min-width: 1024px){
        max-width: 100%;
    }
`;

export { Section, Links, Link, Paragraph }