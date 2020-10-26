import React, { useState } from 'react';
import { IntlContextConsumer, Link, changeLocale, useIntl } from 'gatsby-plugin-intl';
import styled, { keyframes } from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';
import MobileList from './MobileList';
import MobileNavBtn from './MobileNavBtn';
import SocialMedia from '../common/SocialMedia';
import { allProjectsList } from '../common/commonData';
import logoSrc from '../../assets/images/smart-oak-platform-logo.svg';

const documentGlobal = typeof document !== 'undefined';

const appear = keyframes`
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
const StyledLink = styled((props) => <Link {...props} />)`
    display: block;
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: ${(props) => (props.dropdown ? '1.7rem 1rem 1.7rem 3rem' : '1.7rem 1rem')};
    border-bottom: ${(props) => (props.open ? 'none' : '1px solid #393939')};
`;

const MobileNav = () => {
    const [homeMenu, setHomeMenu] = useState(false);
    const [projectsMenu, setProjectsMenu] = useState(false);
    const [otherWebsitesMenu, setOtherWebsitesMenu] = useState(false);
    const [langMenu, setLangMenu] = useState(false);

    if (documentGlobal) {
        if (homeMenu || projectsMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = ' hidden visible';
        }
    }
    const intl = useIntl();
    return (
        <>
            <MobileNavMenu>
                <img style={{ height: '3.2rem' }} src={logoSrc} alt="Smart Oak Project" />
                <MobileNavBtn
                    open={homeMenu}
                    homeBtn
                    onClick={() => {
                        setProjectsMenu(false);
                        setHomeMenu(!homeMenu);
                    }}
                />
            </MobileNavMenu>
            <MobileList open={homeMenu}>
                <MobileNavItem>
                    <StyledLink onClick={() => setHomeMenu(false)} to="/download/">
                        {intl.formatMessage({
                            id: `navigation.download`,
                        })}
                    </StyledLink>
                </MobileNavItem>

                <MobileNavItem>
                    <StyledLink onClick={() => setHomeMenu(false)} to="/contact/">
                        {intl.formatMessage({
                            id: `navigation.contact`,
                        })}
                    </StyledLink>
                </MobileNavItem>
                <MobileNavItem>
                    <StyledLink onClick={() => setHomeMenu(false)} to="/about-us/">
                        {intl.formatMessage({
                            id: `navigation.aboutUs`,
                        })}
                    </StyledLink>
                </MobileNavItem>
                <MobileNavItem
                    open={otherWebsitesMenu}
                    onClick={() => {
                        setLangMenu(false);
                        setOtherWebsitesMenu(!otherWebsitesMenu);
                    }}
                >
                    <DropDownButton open={otherWebsitesMenu}>
                        <DropDownLink>
                            {intl.formatMessage({
                                id: `navigation.otherSites`,
                            })}
                        </DropDownLink>
                        <FaAngleDown
                            style={{
                                transform: otherWebsitesMenu ? 'rotate(180deg)' : 'rotate(0)',
                            }}
                        />
                    </DropDownButton>

                    <MobileList open={otherWebsitesMenu} dropdown>
                        {allProjectsList.map((e, i) => (
                            <MobileNavItem key={i} dropdown>
                                <StyledLink dropdown onClick={() => setHomeMenu(false)} to={e.path}>
                                    {e.text}
                                </StyledLink>
                            </MobileNavItem>
                        ))}
                    </MobileList>
                </MobileNavItem>
                <MobileNavItem
                    open={langMenu}
                    onClick={() => {
                        setOtherWebsitesMenu(false);
                        setLangMenu(!langMenu);
                    }}
                >
                    <DropDownButton open={langMenu}>
                        <IntlContextConsumer>
                            {({ language: currentLocale }) => {
                                return <DropDownLink>{currentLocale.toUpperCase()} </DropDownLink>;
                            }}
                        </IntlContextConsumer>
                        <FaAngleDown
                            style={{
                                transform: langMenu ? 'rotate(180deg)' : 'rotate(0)',
                            }}
                        />
                    </DropDownButton>

                    <MobileList open={langMenu} dropdown>
                        <IntlContextConsumer>
                            {({ languages, language: currentLocale }) =>
                                languages
                                    .filter((e) => e !== currentLocale)
                                    .map((language) => (
                                        <MobileNavItem
                                            dropdown
                                            key={language}
                                            onClick={() => {
                                                setHomeMenu(false);
                                                changeLocale(language);
                                            }}
                                        >
                                            <StyledLink dropdown>
                                                {language.toUpperCase()}
                                            </StyledLink>
                                        </MobileNavItem>
                                    ))
                            }
                        </IntlContextConsumer>
                    </MobileList>
                </MobileNavItem>
                <SocialMedia mobileNav />
            </MobileList>
        </>
    );
};

export default MobileNav;
