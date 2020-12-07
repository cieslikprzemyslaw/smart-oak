import React, { useState, useEffect, useRef } from 'react';

import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FaAngleDown } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import LanguageSubmenu from './LanguageSubmenu';

import Search from './Search';
import Submenu from './Submenu';
import SocialIcons from '../../common/SocialMedia';
import { allProjectsList, projectsList } from '../../common/commonData';
import {
    Container,
    NavContent,
    RightNav,
    StyledLink,
    DropdownLink,
    DropdownLinkItem,
    SearchBtn,
} from './styles';
import { menuAnimation } from './useAnimate';

const Nav = () => {
    const [showLangMenu, setShowLangMenu] = useState(false);
    const [showProjectMenu, setShowProjectMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);

    const NavAnimation = useRef(null);
    const documentGlobal = typeof document !== 'undefined';

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

export default Nav;
