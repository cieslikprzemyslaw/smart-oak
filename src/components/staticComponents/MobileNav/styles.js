import React from 'react';
import { Link } from 'gatsby-plugin-intl';

import styled, { keyframes } from 'styled-components';

const appear = keyframes`
 0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeInFromNone = keyframes`
    0% {

       opacity: 0;
   }
   100% {

       opacity: 1;
   }
`;

const MobileNavMenu = styled.div`
    position: sticky;
    top: 0;
    z-index: 999999999999999;
    align-items: center;
    justify-content: space-between;
    background: black;
    width: 100%;
    display: none;
    padding: 0 1rem;
    height: 5rem;

    @media screen and (max-width: 900px) {
        display: flex;
    }

    @media only screen and (orientation: landscape) {
        img {
            height: 4.5rem;
        }
    }
`;
const DropDownButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${(props) => (props.open ? 'none' : '1px solid #393939')};

    svg {
        font-size: 1.5rem;
    }
`;
const DropDownLink = styled.div`
    display: block;
    width: 100%;
    color: rgba(255, 255, 255, 0.85);
    padding: 1.7rem 1rem 1.7rem 1rem;
    text-decoration: none;
`;

const MobileNavItem = styled.li`
    position: relative;

    margin-left: ${(props) => (props.dropdown ? '0rem' : '2rem')};
    list-style-type: none;

    width: ${(props) => (props.dropdown ? '100%' : '90%')};

    opacity: 0;
    animation: 0.5s ${appear} forwards;
    animation-delay: 0.2s;

    @media only screen and (orientation: landscape) {
        font-size: 1.4rem;
        padding: 1rem;
    }
`;

const MobileNavItemLast = styled.li`
    position: relative;
    margin-top: auto;
    margin-bottom: 7rem;
    margin-left: ${(props) => (props.dropdown ? '0rem' : '2rem')};
    list-style-type: none;

    width: ${(props) => (props.dropdown ? '100%' : '90%')};

    opacity: 0;
    animation: 0.5s ${appear} forwards;
    animation-delay: 0.2s;

    @media only screen and (orientation: landscape) {
        font-size: 1.4rem;
        padding: 1rem;
    }
`;

const StyledLink = styled((props) => <Link {...props} />)`
    display: block;
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: ${(props) => (props.dropdown ? '1.7rem 1rem 1.7rem 3rem' : '1.7rem 1rem')};
    border-bottom: ${(props) => (props.open ? 'none' : '1px solid #393939')};
`;

const MobileListWrapper = styled.ul`
    position: ${(props) => (props.dropdown ? 'static' : 'fixed')};
    transition: ${(props) => (props.dropdown ? 'none' : 'all 0.45s ease')};
    top: 0;
    width: 100vw;
    max-width: 100%;
    display: none;
    background: #0e0e0e;
    color: #fff;
    z-index: 999999999;
    padding-top: ${(props) => (props.dropdown ? '0rem' : '5rem')};

    @media screen and (max-width: 900px) {
        display: block;
    }
`;
const ListWrapper = styled.ul`
    flex-direction: column;
    display: flex;
    height: ${(props) => (props.dropdown ? 'auto' : '100vh')};
    position: relative;
`;

const MobileBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    outline-style: none;
    padding: 4px;
    outline: none;
    transition: all 1s ease;
    svg {
        fill: #fff;
        height: 26px;
        width: 26px;
        animation: ${fadeInFromNone} 0.7s linear;
    }
`;

export {
    MobileNavMenu,
    DropDownButton,
    DropDownLink,
    MobileNavItem,
    StyledLink,
    MobileListWrapper,
    ListWrapper,
    MobileBtn,
    MobileNavItemLast,
};
