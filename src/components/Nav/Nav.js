import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { IntlContextConsumer, Link, useIntl } from 'gatsby-plugin-intl';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FaAngleDown } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import LanguageSubmenu from './LanguageSubmenu';
import Search from './Search';
import Submenu from './Submenu';
import SocialIcons from '../common/SocialMedia';
import { allProjectsList, projectsList } from '../common/commonData';
import { gsap } from 'gsap';

const documentGlobal = typeof document !== 'undefined';

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

const NavPrimary = () => {
    const [showLangMenu, setShowLangMenu] = useState(false);
    const [showProjectMenu, setShowProjectMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);

    const NavAnimation = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setFirstLoad(true);
            ScrollTrigger.refresh();
        }, 800);
    }, []);

    if (documentGlobal) {
        if (showSearch) {
            document.body.style.overflowY = 'scroll';
            document.body.style.width = '100%';
            document.body.style.position = 'fixed';
        } else if (!showSearch) {
            document.body.style.overflow = 'hidden visible';
            document.body.style.position = 'static';
        }
    }

    const menuHidenDelay = () => {
        setTimeout(() => {
            setShowSearch(true);
            console.log(showSearch);
        }, 500);
    };

    const menuAnimation = (refElement) => {
        gsap.to(refElement.current, {
            opacity: 0,
            duration: 0.5,
            ease: 'none',
        });
    };

    const openSearchbar = () => {
        menuAnimation(NavAnimation);
        menuHidenDelay();
    };

    function onInputClose() {
        setShowSearch(false);
    }
    const intl = useIntl();
    return (
        <Container>
            {showSearch ? (
                <Search onInputClose={onInputClose} isDesktop projectsList={projectsList} />
            ) : null}
            {showSearch ? null : (
                <NavContent ref={NavAnimation} anim={firstLoad}>
                    <SocialIcons navigation />
                    <RightNav>
                        <StyledLink to="/download/">
                            {intl.formatMessage({
                                id: `navigation.download`,
                            })}
                        </StyledLink>
                        <StyledLink rightNav to="/contact/">
                            {intl.formatMessage({
                                id: `navigation.contact`,
                            })}
                        </StyledLink>
                        <StyledLink rightNav to="/about-us/">
                            {intl.formatMessage({
                                id: `navigation.aboutUs`,
                            })}
                        </StyledLink>
                        <DropdownLink
                            rightNav
                            onMouseLeave={() => setShowProjectMenu(false)}
                            onMouseEnter={() => setShowProjectMenu(true)}
                        >
                            <DropdownLinkItem>
                                {intl.formatMessage({
                                    id: `navigation.otherSites`,
                                })}
                            </DropdownLinkItem>
                            {showProjectMenu && <Submenu data={allProjectsList} />}
                        </DropdownLink>
                        <SearchBtn onClick={openSearchbar}>
                            <BsSearch />
                        </SearchBtn>
                        <DropdownLink
                            rightNav
                            onMouseLeave={() => setShowLangMenu(false)}
                            onMouseEnter={() => setShowLangMenu(true)}
                        >
                            <DropdownLinkItem>
                                <IntlContextConsumer>
                                    {({ language: currentLocale }) => currentLocale.toUpperCase()}
                                </IntlContextConsumer>
                                <FaAngleDown />
                            </DropdownLinkItem>
                            {showLangMenu && <LanguageSubmenu />}
                        </DropdownLink>
                    </RightNav>
                </NavContent>
            )}
        </Container>
    );
};

export default NavPrimary;
