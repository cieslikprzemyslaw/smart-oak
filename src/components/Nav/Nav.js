import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { IntlContextConsumer, Link, useIntl } from 'gatsby-plugin-intl';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FaSearch, FaDownload, FaAngleDown } from 'react-icons/fa';
import LanguageSubmenu from './LanguageSubmenu';
import Search from './Search';
import Submenu from './Submenu';
import SocialIcons from '../common/SocialMedia';
import { allProjectsList, projectsList } from '../common/commonData';

const documentGlobal = typeof document !== 'undefined';

const SearchBtn = styled.span`
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: 1.2rem 1.4rem;
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    svg {
        margin-left: 1rem;
    }
`;

const Container = styled.div`
    height: 5.5rem;
    min-height: 5rem;
    /* z-index: 20; */
    background-color: #0e0e0e;
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    /* position: relative; */
    @media screen and (max-width: 900px) {
        display: none;
    }
`;
const StyledLink = styled((props) => <Link {...props} />)`
    color: rgba(255, 255, 255, 0.85);
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
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const MiddleNav = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5rem;
    height: 100%;
    animation: ${(props) => (props.anim ? '0.6' : '0')}s ${fadeIn} ease-out;

    @media screen and (max-width: 1000px) {
        margin-left: 0rem;
    }
`;

const DropdownLinkItem = styled.div`
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.85);
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
    height: 100%;
    padding-right: 1.6rem;
    animation: ${(props) => (props.anim ? '0.6' : '0')}s ${fadeIn} ease-out;
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
            document.body.style.overflow = ' hidden visible';
            document.body.style.position = 'static';
        }
    }

    function onInputClose() {
        setShowSearch(false);
    }
    const intl = useIntl();
    return (
        <Container>
            {showSearch ? null : <SocialIcons navigation />}

            {showSearch ? (
                <Search onInputClose={onInputClose} isDesktop projectsList={projectsList} />
            ) : (
                <MiddleNav anim={firstLoad}>
                    <StyledLink to="/download/">
                        {intl.formatMessage({
                            id: `navigation.download`,
                        })}
                        <FaDownload />
                    </StyledLink>
                    <SearchBtn onClick={() => setShowSearch(true)}>
                        {intl.formatMessage({
                            id: `navigation.search`,
                        })}
                        <FaSearch />
                    </SearchBtn>
                </MiddleNav>
            )}
            {showSearch ? null : (
                <RightNav anim={firstLoad}>
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
                            <FaAngleDown />
                        </DropdownLinkItem>
                        {showProjectMenu && <Submenu data={allProjectsList} />}
                    </DropdownLink>

                    <DropdownLink
                        rightNav
                        onMouseLeave={() => setShowLangMenu(false)}
                        onMouseEnter={() => setShowLangMenu(true)}
                    >
                        <DropdownLinkItem>
                            <IntlContextConsumer>
                                {({ languages, language: currentLocale }) =>
                                    currentLocale.toUpperCase()
                                }
                            </IntlContextConsumer>
                            <FaAngleDown />
                        </DropdownLinkItem>
                        {showLangMenu && <LanguageSubmenu />}
                    </DropdownLink>
                </RightNav>
            )}
        </Container>
    );
};

export default NavPrimary;