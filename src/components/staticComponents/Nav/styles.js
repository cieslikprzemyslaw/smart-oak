import React from 'react';
import { Link } from 'gatsby-plugin-intl';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SearchBtn = styled.span`
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: 1rem;
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;

    svg {
        margin-left: 1rem;
    }
`;

const Container = styled.div`
    height: 45px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 900px) {
        display: none;
    }
`;

const NavContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    animation: ${(props) => (props.anim ? '0.6' : '0')}s ${fadeIn} ease-out;
`;

const StyledLink = styled((props) => <Link {...props} />)`
    color: #fff;
    text-decoration: none;
    padding: 1.2rem ${(props) => (props.rightNav ? '1rem' : '1.4rem')};
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    svg {
        margin-left: 1rem;
    }
`;

const DropdownLinkItem = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 14px;
    svg {
        margin-left: 0.5rem;
    }
    img {
        width: 19px;
        height: 19px;
        /* transform: translateY(1px); */
        margin-left: 0.5rem;
    }
`;

const RightNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 600px;
    height: 100%;
`;

const DropdownLink = styled.li`
    color: ${(props) => props.color};
    text-decoration: none;
    list-style-type: none;
    font-size: 14px;
    padding: 1.2rem ${(props) => (props.rightNav ? '1rem' : '1.4rem')};
    cursor: pointer;
    position: relative;
`;
const fadeInBackDrop = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: .6;
  }
`;

const SearchWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35vw;
    height: 45px;

    svg {
        font-size: 2rem;
        color: rgba(255, 255, 255, 0.85);
        margin-right: 0.8rem;
        margin-left: 0.8rem;
        cursor: pointer;
    }
    @media screen and (max-width: 900px) {
        width: 90%;
        margin-left: 2rem;
        svg {
            margin-right: 0;
        }
    }
`;
const DropDown = styled.div`
    background-color: #fff;
    border-radius: 0 0 18px 18px;
    padding-top: 1.5vh;
    position: absolute;
    right: 0;
    top: 45px;
    width: 35vw;
    z-index: 100010123312;
    display: flex;
    flex-direction: column;
    animation: 0.6s ${fadeIn} ease-in;

    @media screen and (max-width: 900px) {
        width: 90vw;
        top: 8rem;
        padding-bottom: 0vh;
        padding-top: 0vh;
        border-radius: 0;
    }
`;
const DropdownSearchLink = styled(Link)`
    padding: 1.2rem 0.8rem;
    list-style: none;
    padding-left: 8rem;
    cursor: pointer;
    color: #000;
    position: relative;
    text-decoration: none;
    transform: translateX(20%);
    opacity: 0;

    &:hover {
        &:last-child {
            border-radius: 0 0 1rem 1rem;
        }
        color: #06c;
        background-color: #f4f4f4;
    }
`;

const Backdrop = styled.div`
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    left: 0;
    top: 4.5rem;
    width: 100vw;
    height: calc(100vh - 4.5rem);
    z-index: 10000143;
    animation: 0.6s ${fadeInBackDrop} ease-in;
`;

const Input = styled.input`
    width: 100%;
    background-color: inherit;
    border: none;
    border-radius: 14px;
    font-size: 1.4rem;
    height: 3rem;
    color: rgba(255, 255, 255, 0.85);
    padding: 1rem 2rem;
    outline: none;
    background: #282828;
    margin: 2rem auto;
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
        -webkit-appearance: none;
    }
    ${(props) =>
        props.isDesktop &&
        css`
            margin: 3rem auto;
            background-color: #0e0e0e;
            -webkit-appearance: textfield;
            border: none;
            border-radius: 14px;
            height: 2.2rem;
            color: rgba(255, 255, 255, 0.85);
            outline: none;
            animation: 0.6s ${fadeIn} ease-out;
            transform: translateX(10%);
            opacity: 0;
            &::-webkit-search-decoration,
            &::-webkit-search-cancel-button,
            &::-webkit-search-results-button,
            &::-webkit-search-results-decoration {
                -webkit-appearance: none;
            }
        `}
`;

const LanguageSubmenuWrapper = styled.ul`
    width: 100%;
    height: 130%;
    left: 0px;
    top: 30px;
    position: absolute;
    background-color: black;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const LanguageSubmenuListItem = styled.li`
    margin: 1rem 0;
    list-style-type: none;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    padding: 0.8rem 4rem;

    cursor: pointer;
    &:first-child {
        margin-top: 2rem;
    }
`;

const SubmenuWrapper = styled.ul`
    width: 17rem;
    left: 48%;
    margin-top: 10px;
    transform: translateX(-50%);
    position: absolute;
    background-color: black;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${(props) =>
        props.krs &&
        css`
            width: 15rem;
            padding: 0.5rem;
        `}
`;

const SubmenuListItem = styled.li`
    margin: 1.6rem 0;
    list-style-type: none;
    &:first-child {
        margin-top: 2.4rem;
    }

    ${(props) =>
        props.flex &&
        css`
            margin: 0.2rem 0;

            display: flex;
            justify-content: space-between;
            align-items: center;
            svg {
                margin: 0.4rem 1.5rem;

                color: rgba(255, 255, 255);
                font-size: 1.7rem;
                &:hover {
                    color: rgba(255, 255, 255, 0.45);
                }
            }
        `}
`;

const StyledText = styled.span`
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    cursor: initial;
    font-size: 1.4rem;

    ${(props) =>
        props.isSecond &&
        css`
            font-size: 1.7rem;
            letter-spacing: 1px;
        `}
`;
const SubmenuStyledLink = styled.a`
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: 1.2rem 0.8rem;

    cursor: pointer;
    &:hover {
        color: #2a80f8;
    }
    ${(props) =>
        props.flex &&
        css`
            padding: 0;
            cursor: initial;
        `}
`;

export {
    SearchBtn,
    Container,
    NavContent,
    StyledLink,
    DropdownLinkItem,
    RightNav,
    DropdownLink,
    SearchWrapper,
    DropDown,
    DropdownSearchLink,
    Backdrop,
    Input,
    LanguageSubmenuWrapper,
    LanguageSubmenuListItem,
    SubmenuWrapper,
    SubmenuListItem,
    StyledText,
    SubmenuStyledLink,
};
