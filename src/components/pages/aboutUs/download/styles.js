import styled from 'styled-components';

const Section = styled.section`
    margin-bottom: 5vh;
`;

const Links = styled.section`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin: 2.5vh 5vw 2.5vh 5vw;

    @media (min-width: 640px) {
        width: content;
    }

    @media (min-width: 1024px) {
        text-align: left;
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
    width: 100%;
    margin: 20px auto;

    @media (min-width: 640px) {
        margin: 0 0;
        width: auto;
    }

    @media (min-width: 1024px) {
        font-size: 20px;
    }
`;

const Alink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 20px;
    border: 0.5px solid #9d9d9d;
    background-color: #fff;
    text-decoration: none;
    color: #000;
    margin: 0 auto;

    @media (min-width: 640px) {
        margin: 0 0;
    }
`;

export { Section, Links, Link, Paragraph, DownloadTitle, Alink };
