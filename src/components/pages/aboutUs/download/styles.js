import styled from 'styled-components';

const Section = styled.section`
    margin-bottom: 5vh;
`;

const Links = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 2.5vh 5vw 2.5vh 5vw;

    @media (min-width: 1024px) {
        max-width: 45%;
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
    font-weight: 800;
    font-size: 16px;

    @media (min-width: 1024px) {
        max-width: 100%;
        font-size: 20px;
    }
`;

const DownloadTitle = styled.p`
    font-size: 16px;

    @media (min-width: 1024px) {
        font-size: 20px;
    }
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 20px;
    border: 0.5px solid #9D9D9D;
    background-color: #fff;
`;

const Alink = styled.a`
      text-decoration: none;
`;

export { Section, Links, Link, Paragraph, DownloadTitle, Button, Alink };
