import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { gsap } from 'gsap';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30.5rem;

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
            width: 20rem;
            padding-left: 1.6rem;
        `}
`;

const ExternalLink = styled.a`
    text-decoration: none;
    transition: all 0.15s ease;
    font-size: ${({ footer }) => (footer ? '2.4rem' : '3.2rem')};
    color: white;
    margin-right: 0;

    ${({ navigation }) =>
        navigation &&
        css`
            font-size: 1.6rem;
        `}
`;

const SocialMedia = ({ footer, navigation, mobileNav }) => {
    const containerRef = useRef();
    useEffect(() => {
        if (mobileNav) {
            gsap.to(containerRef.current, { opacity: 1, delay: 0.2, duration: 0.6 });
        }
    }, []);
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
