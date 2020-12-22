import React, { useState, useEffect } from 'react';

import { IoMdMenu, IoMdClose } from 'react-icons/io';
import PropTypes from 'prop-types';

import { MobileBtn } from './styles';

const MobileNavBtn = ({ open, onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    return (
        <MobileBtn
            onClick={
                onClick
                    ? onClick
                    : () => {
                          setIsOpen(!isOpen);
                      }
            }
        >
            {open ? <IoMdClose /> : <IoMdMenu />}
        </MobileBtn>
    );
};

MobileNavBtn.propTypes = {
    open: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    homeBtn: PropTypes.bool,
};

export default MobileNavBtn;
