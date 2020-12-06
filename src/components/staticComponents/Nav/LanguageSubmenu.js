import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import { LanguageSubmenuWrapper, LanguageSubmenuListItem } from './styles';

const LanguageSubmenu = () => {
    return (
        <LanguageSubmenuWrapper>
            <IntlContextConsumer>
                {({ languages, language: currentLocale }) =>
                    languages
                        .filter((e) => e !== currentLocale)
                        .map((language) => (
                            <LanguageSubmenuListItem
                                key={language}
                                onClick={() => changeLocale(language)}
                            >
                                {language.toUpperCase()}
                            </LanguageSubmenuListItem>
                        ))
                }
            </IntlContextConsumer>
        </LanguageSubmenuWrapper>
    );
};
export default LanguageSubmenu;
