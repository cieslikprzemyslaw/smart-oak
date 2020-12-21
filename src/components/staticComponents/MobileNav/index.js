import React, { useState } from 'react';
import { IntlContextConsumer, changeLocale, useIntl } from 'gatsby-plugin-intl';

import { FaAngleDown } from 'react-icons/fa';

import MobileList from './MobileList';
import MobileNavBtn from './MobileNavBtn';
import SocialMedia from '../../common/SocialMedia';
import { allProjectsList } from '../../common/commonData';
import logoSrc from '../../../assets/images/smart-oak-platform-logo.svg';
import {
    MobileNavMenu,
    MobileNavItem,
    StyledLink,
    DropDownButton,
    DropDownLink,
    MobileNavItemLast,
} from './styles';

const documentGlobal = typeof document !== 'undefined';

const MobileNav = () => {
    const intl = useIntl();

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
                <MobileNavItemLast>
                    <SocialMedia mobileNav dropdown />
                </MobileNavItemLast>
            </MobileList>
        </>
    );
};

export default MobileNav;
