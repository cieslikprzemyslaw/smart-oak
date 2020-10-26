import React from 'react';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import background from '../assets/images/background.png';
const Container = styled.div`
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
const Title = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 200px;
    line-height: 272px;
    color: #fbf8f8;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 360px) {
        font-size: 96px;
        line-height: 131px;
    }
`;
const ErrorInformation = styled.h3`
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    text-transform: uppercase;
    color: #fffcfc;
    margin-bottom: 5rem;
    @media screen and (max-width: 360px) {
        font-size: 14px;
        line-height: 19px;
    }
`;
const StyledLink = styled(Link)`
    border: 1px solid #ffffff;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    padding: 19px 77px;
    background-color: transparent;
    text-decoration: none;
    color: #fbf8f8;
    cursor: pointer;
    @media screen and (max-width: 360px) {
        background: #fffdfd;
        color: black;
        font-size: 12px;
        line-height: 16px;
        padding: 15px 50px;
    }
`;
const NotFoundPage = () => {
    // to translate. waiting for translations from Paweł
    return (
        <Container>
            <Title>404</Title>
            <ErrorInformation>Page not found</ErrorInformation>
            <StyledLink to="/">Go back</StyledLink>
        </Container>
    );
};

export default NotFoundPage;
