import React from 'react';
import styled from 'styled-components';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const SubmenuWrapper = styled.ul`
    width: 100%;
    left: -10px;
    position: absolute;
    background-color: black;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const SubmenuListItem = styled.li`
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

const LanguageSubmenu = () => {
    return (
        <SubmenuWrapper>
            <IntlContextConsumer>
                {({ languages, language: currentLocale }) =>
                    languages
                        .filter((e) => e !== currentLocale)
                        .map((language) => (
                            <SubmenuListItem key={language} onClick={() => changeLocale(language)}>
                                {language.toUpperCase()}
                            </SubmenuListItem>
                        ))
                }
            </IntlContextConsumer>
        </SubmenuWrapper>
    );
};
export default LanguageSubmenu;
