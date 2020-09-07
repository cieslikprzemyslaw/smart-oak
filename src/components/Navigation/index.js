import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'gatsby';

const NavigationWrapper = styled.nav`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: ${({ theme: { sizes } }) => sizes.navigationHeight}};
    background-color: #000;
`;

const NavigationList = styled.ul`
    margin-right: 50px;
    list-style: none;
`;

const NavigationListItem = styled.li`
    font-size: 14px;
    font-weight: 600;
    line-height: 41px;
    margin-left: 50px;

    a {
        margin-right: 15px;
        text-decoration: none;
        color: white;
    }
`;

const NavigationListItemChevronDown = styled.span`
    margin-left: 10px;

    svg {
        transform: translateY(20%);
    }
`;

const NavigationListItemPercent = styled.span`
    margin-left: 10px;
    font-weight: 900;
    font-size: 17px;
`;

const Navigation = () => {
    return (
        <>
            <NavigationWrapper>
                <NavigationList>
                    <NavigationListItem>
                        <Link to="/">
                            Przekaż
                            <NavigationListItemPercent>1%</NavigationListItemPercent>
                        </Link>
                        <Link to="/">
                            Język: PL
                            <NavigationListItemChevronDown>
                                <FaChevronDown />
                            </NavigationListItemChevronDown>
                        </Link>
                    </NavigationListItem>
                </NavigationList>
            </NavigationWrapper>
        </>
    );
};

export default Navigation;
