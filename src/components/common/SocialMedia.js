import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FaFacebookSquare, FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import { gsap } from 'gsap';

const Container = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 600px) {
        width: 80%;
        margin: 0 auto;
        margin-top: 3rem;
    }
    ${({ mobileNav }) =>
        mobileNav &&
        css`
            opacity: 0;
        `}
    ${({ navigation }) =>
        navigation &&
        css`
            width: 260px;
            justify-content: space-evenly;
            margin-left: 3rem;
        `}
`;

const ExternalLink = styled.a`
    text-decoration: none;
    transition: all 0.15s ease;
    font-size: ${({ footer }) => (footer ? '2.4rem' : '3.2rem')};
    color: white;

    ${({ navigation }) =>
        navigation &&
        css`
            margin-top: 5px;
            font-size: 1.8rem;
            padding: 0.3rem 0.8rem;
        `}
`;

const SocialMedia = ({ footer, navigation, mobileNav }) => {
    const containerRef = useRef();
    useEffect(() => {
        if (mobileNav) {
            gsap.to(containerRef.current, { opacity: 1, delay: 0.2, duration: 0.6 });
        }
    }, [mobileNav]);
    const Icons = [
        {
            href: 'https://www.facebook.com/smartoakproject/',
            icon: FaFacebookSquare,
        },
        {
            href: 'https://twitter.com/smart_oak',
            icon: FaTwitter,
        },
        {
            href: 'https://www.instagram.com/smartoakproject/',
            icon: FaInstagram,
        },
        {
            href: 'https://www.youtube.com/c/SmartOakProject/featured',
            icon: FaYoutube,
        },
        {
            href: 'https://www.linkedin.com/company/smartoakproject/',
            icon: FaLinkedin,
        },
    ];
    const mapIcons = Icons.map(({ href, icon: Icon }) => (
        <ExternalLink
            key={href}
            navigation={navigation}
            footer={footer}
            target="_blank"
            rel="noreferrer"
            href={href}
        >
            <Icon />
        </ExternalLink>
    ));
    return (
        <Container ref={containerRef} footer={footer} navigation={navigation} mobileNav={mobileNav}>
            {mapIcons}
        </Container>
    );
};

export default SocialMedia;
