import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';

const Section = styled.div`
    object-fit: fill;
    height: 100vh;
    position: relative;
    z-index: 3;
    font-family: Open Sans;
    @media only screen and (min-width: 900px) {
        position: absolute;
        left: 70px;
        top: 85px;
        width: 100%;
    }
`;

const Container = styled.div`
    width: 85vw;
    > * {
        will-change: opacity, scale, transform;
    }
    @media only screen and (max-width: 1250px) {
        width: 80vw;
    }
    @media only screen and (max-width: 900px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    @media only screen and (max-width: 550px) {
        width: 90vw;
    }
`;
const Title = styled.h2`
    font-style: normal;
    font-weight: bold;
    margin-bottom: 3rem;
    font-size: 48px;
    line-height: 111.5%;
    color: #fff;

    @media only screen and (max-width: 900px) {
        font-size: 36px;
        line-height: 119%;
        margin-bottom: 2rem;
    }
    @media only screen and (max-width: 500px) {
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
    }
`;
const Description = styled.p`
    font-style: normal;
    font-weight: 600;
    margin-bottom: 7.8rem;
    width: 830px;
    font-size: 20px;
    line-height: 136%;
    color: #fff;
    @media only screen and (max-width: 900px) {
        font-size: 16px;
        line-height: 125%;
        margin-bottom: 4rem;
        width: 100%;
    }
    @media only screen and (max-width: 500px) {
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
    }
`;

const DescriptionSection = ({ forwardRef }) => {
    const intl = useIntl();
    return (
        <Section>
            <Container ref={forwardRef}>
                <Title>
                    {intl.formatMessage({
                        id: `videoSection.downloadPlatform`,
                    })}
                </Title>
                <Description>
                    {intl.formatMessage({
                        id: `videoSection.joinEnvironment`,
                    })}
                </Description>
            </Container>
        </Section>
    );
};
export default DescriptionSection;
