import React from 'react';
import styled, { css } from 'styled-components';
import { FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${({ footer }) => (footer ? '305.52px' : '100%')};

    @media only screen and (min-width: 900px) {
        width: 305.52px;
    }
`;

const ExternalLink = styled.a`
    text-decoration: none;
    transition: all 0.15s ease;
    font-size: ${({ footer }) => (footer ? '2.4rem' : '3.2rem')};
    color: white;
    margin-right: 0;
`;

const SocialMedia = ({ footer }) => {
    const Icons = [
        {
            href: 'https://www.facebook.com/smartoakproject/',
            icon: FaFacebookSquare,
        },
        {
            href: 'https://www.linkedin.com/company/smartoakproject/',
            icon: FaLinkedin,
        },
        {
            href: 'https://www.youtube.com/c/SmartOakProject/featured',
            icon: FaYoutube,
        },
        {
            href: 'https://www.instagram.com/smartoakproject/',
            icon: AiFillInstagram,
        },
    ];
    const mapIcons = Icons.map(({ href, icon: Icon }) => (
        <ExternalLink footer={footer} key={href} target="_blank" rel="noreferrer" href={href}>
            <Icon />
        </ExternalLink>
    ));
    return <Container footer={footer}>{mapIcons}</Container>;
};

export default SocialMedia;
