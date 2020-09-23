import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { IntlContextConsumer, Link, useIntl } from 'gatsby-plugin-intl';
import { FaSearch, FaShoppingCart, FaDownload, FaAngleDown, FaHeart } from 'react-icons/fa';

import LanguageSubmenu from './LanguageSubmenu';

import Submenu from './Submenu';
import { projectLinks } from './projectLinks';

const StyledLink = styled((props) => <Link {...props} />)`
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: 1.2rem ${(props) => (props.rightNav ? '1rem' : '1.4rem')};
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
        margin-left: 1rem;
    }
`;

const Container = styled.div`

    height: ${({ theme: { sizes } }) => sizes.navigationHeight}};
    background-color: #0e0e0e;
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    /* position: relative; */
    @media screen and (max-width: 900px) {
        display: none;
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
        margin-left: 0.5rem;
    }
`;

const DropdownLink = styled.li`
    color: ${(props) => props.color};
    text-decoration: none;
    list-style-type: none;
    padding: 1.2rem ${(props) => (props.rightNav ? '1rem' : '1.4rem')};
    cursor: pointer;
    position: relative;
`;
const NavPrimary = ({ projectsList }) => {
    const [showLangMenu, setShowLangMenu] = useState(false);

    const intl = useIntl();
    return (
        <Container>
            <StyledLink rightNav to="/about-us/">
                {intl.formatMessage({
                    id: `general.aboutUs`,
                })}
            </StyledLink>

            <DropdownLink
                rightNav
                onMouseLeave={() => setShowLangMenu(false)}
                onMouseEnter={() => setShowLangMenu(true)}
            >
                <DropdownLinkItem>
                    <IntlContextConsumer>
                        {({ languages, language: currentLocale }) => currentLocale.toUpperCase()}
                    </IntlContextConsumer>
                    <FaAngleDown />
                </DropdownLinkItem>
                {showLangMenu && <LanguageSubmenu />}
            </DropdownLink>
        </Container>
    );
};

export default NavPrimary;
