import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { MobileListWrapper, ListWrapper } from './styles';

const MobileList = ({ open, dropdown, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    return (
        <MobileListWrapper
            dropdown={dropdown}
            style={{
                height: isOpen ? '110%' : 0,
            }}
        >
            <ListWrapper dropdown={dropdown}>{isOpen ? children : null}</ListWrapper>
        </MobileListWrapper>
    );
};

MobileList.propTypes = {
    open: PropTypes.bool,
    dropdown: PropTypes.bool,
    children: PropTypes.elementType,
};

export default MobileList;
