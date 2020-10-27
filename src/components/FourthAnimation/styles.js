import styled from 'styled-components';

const StyledImg = styled.img`
    width: 100vw;
`;

const Container = styled.div`
    position: relative;
    z-index: -1;
`;

const Content = styled.div`
    position: fixed;
    width: 75%;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    color: white;
    z-index: 1;
    display: 'none';
`;

const ContentParagraph = styled.p`
    margin-top: 40px;
    font-size: 24px;
    line-height: 1.5;
`;

const ContentHeader = styled.h2`
    font-size: 44px;
    line-height: 1.2;
`;

export { StyledImg, Container, Content, ContentHeader, ContentParagraph };
