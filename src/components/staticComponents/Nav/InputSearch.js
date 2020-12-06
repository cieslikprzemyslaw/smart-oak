import React, { useRef, useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { gsap } from 'gsap';

import { Input } from './styles';

const InputSearch = ({ isDesktop, handleRef }) => {
    const intl = useIntl();

    const childRef = useRef(null);

    useEffect(() => {
        gsap.to(childRef.current, 0.5, {
            transform: 'translateX(0)',
            opacity: 1,
            ease: 'none',
        });
        handleRef(childRef);
    }, [handleRef]);

    const inputPlaceholder = `${intl.formatMessage({
        id: 'navigation.searchIn',
    })} Smart Oak Project`;

    return (
        <Input ref={childRef} isDesktop={isDesktop} type="search" placeholder={inputPlaceholder} />
    );
};

export default InputSearch;
