import React from 'react';
import styled from 'styled-components';
import SocialMedia from '../common/SocialMedia';
import { MdCopyright } from 'react-icons/md';

const Section = styled.footer`
    width: 100%;
    background: #0e0e0e;
    padding: 17px 0;
    position: relative;
    z-index: 3;
`;

const Container = styled.div`
    position: relative;
    z-index: 3;
    width: 80%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
`;

const Copy = styled.div`
    display: flex;
    @media screen and (max-width: 600px) {
        order: 5;
        margin-top: 2rem;
    }
`;

const CopyCompany = styled.h2`
    font-style: normal;
    font-weight: normal;
    margin-top: 2px;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
`;

const StyledCopyLogo = styled(MdCopyright)`
    font-size: 1.5rem;
    fill: #ffffff;
    margin-right: 8px;
`;

const Footer = () => {
    return (
        <Section>
            <Container>
                <SocialMedia footer />
                <Copy>
                    <StyledCopyLogo className="copyright" />
                    <CopyCompany>2020 Smart Oak Project. Wszelkie prawa zastrzeżone.</CopyCompany>
                </Copy>
            </Container>
        </Section>
    );
};

export default Footer;
