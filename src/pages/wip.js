import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';
import { gsap } from 'gsap';

import PlatformLogo from '../assets/images/smart-oak-projects-logo.svg';

const PageWrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    width: 860px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Title = styled.h1`
    font-size: clamp(3rem, 5vw, 6rem);
    font-weight: 300;
`;

const Subtitle = styled.p`
    font-size: clamp(1.4rem, 2vw, 2rem);
    margin: 20px;
    width: 62%;
    color: #4a4a4a;

    @media (max-width: 485px) {
        width: 80%;
    }
`;

const Logo = styled.img`
    width: 45%;
    margin: 20px;
`;

const WorkInProgress = () => {
    const intl = useIntl();

    useEffect(() => {
        gsap.to('body', 0, { css: { visibility: 'visible' } });
    }, []);

    return (
        <PageWrapper>
            <Content>
                <Title>
                    {intl.formatMessage({
                        id: `workInProgress.title`,
                    })}
                </Title>
                <Subtitle>
                    {intl.formatMessage({
                        id: `workInProgress.subtitle`,
                    })}
                </Subtitle>
                <Logo src={PlatformLogo}></Logo>
            </Content>
        </PageWrapper>
    );
};

export default WorkInProgress;
