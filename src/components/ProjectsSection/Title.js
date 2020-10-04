import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
    @media screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

const Title1 = styled.h3`
    font-style: normal;
    font-weight: normal;
    font-size: 5.2rem;
    line-height: 119%;
    color: #0e0e0e;
    @media screen and (max-width: 600px) {
        text-align: center;
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: 40px;
        letter-spacing: 0em;
    }
`;

const Title2 = styled.h3`
    font-weight: bold;
    font-size: 6.4rem;
    line-height: 119%;
    color: #0e0e0e;
    display: inline-block;
    padding-bottom: 5px;
    margin-left: 10rem;
    margin-bottom: 4rem;
    border-bottom: 5px solid #e2bc3f;
    @media screen and (max-width: 900px) {
        text-align: center;
        margin-left: 0;
    }
    @media screen and (max-width: 600px) {
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 0em;
        text-align: center;
    }
`;

const Title = ({ title1, title2 }) => (
    <TitleContainer>
        <Title1>{title1}</Title1>
        <Title2>{title2}</Title2>
    </TitleContainer>
);

export default Title;
