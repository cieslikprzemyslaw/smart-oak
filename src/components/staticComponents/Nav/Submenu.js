import React from 'react';

import PropTypes from 'prop-types';

import { SubmenuWrapper, SubmenuListItem, StyledText, StyledLink } from './styles';

const Submenu = ({ krs, data }) => {
    if (krs) {
        return (
            <SubmenuWrapper right krs={krs}>
                {data.map((e, i) => {
                    return (
                        <SubmenuListItem key={i} flex>
                            <StyledText flex isSecond={i === 1}>
                                {e.text}
                            </StyledText>
                        </SubmenuListItem>
                    );
                })}
            </SubmenuWrapper>
        );
    } else {
        return (
            <SubmenuWrapper>
                {data.map((e, i) => {
                    return (
                        <SubmenuListItem key={i}>
                            <StyledLink href={e.path}>{e.text}</StyledLink>
                        </SubmenuListItem>
                    );
                })}
            </SubmenuWrapper>
        );
    }
};

Submenu.propTypes = {
    krs: PropTypes.bool,
    data: PropTypes.array,
};
export default Submenu;
